import pg from "pg";
import { surveySubmissionSchema } from "../shared/schema.js";

// Used by both the Express server (server/routes.ts) and the Vercel function (api/surveys.ts),
// so the survey works whichever way the site is hosted. Responses are stored in the
// Postgres database named by DATABASE_URL (Neon, Supabase, Replit or Vercel Postgres).

type Result = { status: number; body: Record<string, unknown> };

let pool: pg.Pool | undefined;
let tableReady: Promise<unknown> | undefined;

function getPool(url: string) {
  pool ??= new pg.Pool({
    connectionString: url,
    max: 1,
    // Hosted databases require TLS; a local one usually does not.
    ssl: /localhost|127\.0\.0\.1/.test(url) ? undefined : { rejectUnauthorized: false },
  });
  return pool;
}

function ensureTable(db: pg.Pool) {
  // Creates the table on first use, so no separate migration step is needed.
  tableReady ??= db
    .query(
      `CREATE TABLE IF NOT EXISTS surveys (
         id serial PRIMARY KEY,
         visited text NOT NULL,
         rating integer NOT NULL,
         nps integer NOT NULL,
         improvement text NOT NULL
       );
       ALTER TABLE surveys ADD COLUMN IF NOT EXISTS created_at timestamptz NOT NULL DEFAULT now();`,
    )
    .catch((err) => {
      tableReady = undefined;
      throw err;
    });
  return tableReady;
}

export async function handleSurveySubmission(body: unknown): Promise<Result> {
  const parsed = surveySubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return { status: 400, body: { message: "Please check your answers and try again." } };
  }

  const { visited, rating, nps, improvement, website } = parsed.data;

  // A filled spam trap means a bot: report success but store nothing.
  if (website) {
    return { status: 200, body: { ok: true } };
  }

  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error("Survey not saved: DATABASE_URL is not set on this deployment.");
    return { status: 503, body: { message: "Survey storage is not configured." } };
  }

  try {
    const db = getPool(url);
    await ensureTable(db);
    await db.query(
      "INSERT INTO surveys (visited, rating, nps, improvement) VALUES ($1, $2, $3, $4)",
      [visited, rating, nps, improvement],
    );
    return { status: 201, body: { ok: true } };
  } catch (err) {
    console.error("Survey not saved:", err);
    return { status: 500, body: { message: "Could not save the survey." } };
  }
}
