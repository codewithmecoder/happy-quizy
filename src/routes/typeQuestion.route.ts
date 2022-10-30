import express from "express";
import {
  createTypeQuestionHandler,
  deleteTypeQuestionHandler,
  getTypeQuestionHandler,
  getTypeQuestionsHandler,
  updateTypeQuestionHandler,
} from "../controllers/typeQuestion.controller";
import { requireAdmin } from "../middlewares/requireAdmin.middleware";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

// type question section //
router.post("/", requireAdmin, createTypeQuestionHandler);
router.put("/:id", requireAdmin, updateTypeQuestionHandler);
router.delete("/:id", requireAdmin, deleteTypeQuestionHandler);
router.get("/", requireUser, getTypeQuestionsHandler);
router.get("/:id", requireUser, getTypeQuestionHandler);

export default router;
