import { Prisma, TypeQuestion } from "@prisma/client";
import express, { Request, Response } from "express";
import {
  createAnswersHandler,
  createQuestionHandler,
  createTypeQuestionHandler,
  deleteQuestionHandler,
  deleteTypeQuestionHandler,
  getQuestionByIdHandler,
  getQuestionByTypeHandler,
  getTypeQuestionHandler,
  getTypeQuestionsHandler,
  updateQuestionHandler,
  updateTypeQuestionHandler,
} from "../controllers/quiz.controller";
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
router.delete(
  "/delete-type-question/:id",
  requireAdmin,
  deleteTypeQuestionHandler
);
router.get("/get-type-questions", requireUser, getTypeQuestionsHandler);
router.get("/get-type-question/:id", requireUser, getTypeQuestionHandler);
// end type question section //

// question section //
router.post("/create-question", requireAdmin, createQuestionHandler);
router.put("/update-question/:id", requireAdmin, updateQuestionHandler);
router.delete("/delete-question", requireAdmin, deleteQuestionHandler);
router.get("/get-question-by-id/:id", requireUser, getQuestionByIdHandler);
router.get("/get-question-by-type", requireUser, getQuestionByTypeHandler);
// end question section //

// answer section //
router.post("/create-answers", requireAdmin, createAnswersHandler);
router.put("/update-question/:id", requireAdmin, updateQuestionHandler);
router.delete("/delete-question", requireAdmin, deleteQuestionHandler);
router.get("/get-question-by-id/:id", requireUser, getQuestionByIdHandler);
router.get("/get-question-by-type", requireUser, getQuestionByTypeHandler);
// end answer section //
export default router;
