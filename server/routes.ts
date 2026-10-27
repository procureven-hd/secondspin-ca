import type { Express } from "express";
import { createServer, type Server } from "http";
import { handleSurveySubmission } from "./surveys";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/surveys", async (req, res) => {
    const result = await handleSurveySubmission(req.body);
    res.status(result.status).json(result.body);
  });

  const httpServer = createServer(app);

  return httpServer;
}
