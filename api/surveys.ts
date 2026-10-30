import { handleSurveySubmission } from "../server/surveys.js";

// Vercel serverless function for POST /api/surveys.
// Vercel parses the JSON body and adds Express-style res.status().json().
type VercelRequest = { method?: string; body?: unknown };
type VercelResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponse;
  json(body: unknown): void;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const result = await handleSurveySubmission(req.body);
  res.status(result.status).json(result.body);
}
