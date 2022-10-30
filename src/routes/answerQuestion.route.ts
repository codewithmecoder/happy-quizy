import express from "express";
import { createAnswersHandler } from "../controllers/answerQuestion.controller";
import {
  deleteQuestionHandler,
  getQuestionByIdHandler,
  getQuestionByTypeHandler,
  updateQuestionHandler,
} from "../controllers/question.controller";
import { requireAdmin } from "../middlewares/requireAdmin.middleware";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

router.post("/", requireAdmin, createAnswersHandler);
router.put("/:id", requireAdmin, updateQuestionHandler);
router.delete("/:id", requireAdmin, deleteQuestionHandler);
router.get("/byId/:id", requireUser, getQuestionByIdHandler);
router.get("/byQuestion/:id", requireUser, getQuestionByTypeHandler);
export default router;
