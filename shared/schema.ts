import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const surveys = pgTable("surveys", {
  id: serial("id").primaryKey(),
  visited: text("visited").notNull(), // "yes" or "no"
  rating: integer("rating").notNull(), // 1-5
  nps: integer("nps").notNull(), // 0-10
  improvement: text("improvement").notNull(), // open-ended feedback
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSurveySchema = createInsertSchema(surveys).omit({
  id: true,
  createdAt: true,
});

// What the survey form sends. Shared by the form and the API so both enforce the same rules.
export const surveySubmissionSchema = z.object({
  visited: z.enum(["yes", "no"], { message: "Please select an option" }),
  rating: z.number().int().min(1).max(5),
  nps: z.number().int().min(0).max(10),
  improvement: z.string().trim().min(1, "Please provide feedback").max(500),
  // Spam trap: hidden from people, so only bots fill it in.
  website: z.string().max(200).optional(),
});

export type SurveySubmission = z.infer<typeof surveySubmissionSchema>;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertSurvey = z.infer<typeof insertSurveySchema>;
export type Survey = typeof surveys.$inferSelect;
