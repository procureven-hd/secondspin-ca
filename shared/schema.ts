import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
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
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSurveySchema = createInsertSchema(surveys).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertSurvey = z.infer<typeof insertSurveySchema>;
export type Survey = typeof surveys.$inferSelect;
