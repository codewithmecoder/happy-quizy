import { Prisma, TypeQuestion } from "@prisma/client";
import express, { Request, Response } from "express";
import {
  createQuestionHandler,
  createTypeQuestionHandler,
  getTypeQuestionsHandler,
  updateTypeQuestionHandler,
} from "../controllers/quiz.controller";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { requireAdmin } from "../middlewares/requireAdmin.middleware";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

// type question section //
router.post("/create-type-question", requireAdmin, createTypeQuestionHandler);
router.put(
  "/update-type-question/:id",
  requireAdmin,
  updateTypeQuestionHandler
);
router.get("/get-type-questions", requireUser, getTypeQuestionsHandler);
// end type question section //

// question section //
router.post("/create-question", requireAdmin, createQuestionHandler);
export default router;
