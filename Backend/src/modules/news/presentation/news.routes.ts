import { Router } from "express";
import { NewsController } from "./news.controller.js";
import { NewsService } from "../application/news.service.js";
import { PrismaNewsRepository } from "../infrastructure/repositories/prisma-news.repository.js";
import { prisma } from "../../../shared/database/prisma.js";
import { authenticateAdmin } from "../../../shared/middleware/admin-auth.js";

export const createNewsRouter = () => {
  const repository = new PrismaNewsRepository(prisma);
  const service = new NewsService(repository);
  const controller = new NewsController(service);

  const router = Router();

  router.get("/", controller.getAll);
  router.get("/:id", controller.getById);
  router.post("/", authenticateAdmin, controller.create);
  router.put("/:id", authenticateAdmin, controller.update);
  router.delete("/:id", authenticateAdmin, controller.delete);

  return router;
};
