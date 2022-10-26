import { Prisma, TypeQuestion } from "@prisma/client";
import express, { Request, Response } from "express";
import {
  createTypeQuestionHandler,
  getTypeQuestionsHandler,
  updateTypeQuestionHandler,
} from "../controllers/quiz.controller";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { requireAdmin } from "../middlewares/requireAdmin.middleware";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

router.post("/create-type-question", requireAdmin, createTypeQuestionHandler);
router.put(
  "/update-type-question/:id",
  requireAdmin,
  updateTypeQuestionHandler
);
router.get("/get-type-questions", requireUser, getTypeQuestionsHandler);

export default router;
