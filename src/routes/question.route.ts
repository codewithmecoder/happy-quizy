import express from "express";
import {
  createQuestionHandler,
  deleteQuestionHandler,
  getQuestionByIdHandler,
  getQuestionByTypeHandler,
  getQuestionsHandler,
  updateQuestionHandler,
} from "../controllers/question.controller";
import { requireAdmin } from "../middlewares/requireAdmin.middleware";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

/**
 * @openapi
 * '/api/v1/question':
 *  post:
 *     tags:
 *     - Question
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateQuestion'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateQuestionResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.post("/", requireAdmin, createQuestionHandler);

/**
 * @openapi
 * '/api/v1/question/{id}':
 *  put:
 *     tags:
 *     - Question
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateQuestionResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.put("/:id", requireAdmin, updateQuestionHandler);

/**
 * @openapi
 * '/api/v1/question/{id}':
 *  delete:
 *     tags:
 *     - Question
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.delete("/:id", requireAdmin, deleteQuestionHandler);

/**
 * @openapi
 * '/api/v1/question/byId/{id}':
 *  get:
 *     tags:
 *     - Question
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateQuestionResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/byId/:id", requireUser, getQuestionByIdHandler);

/**
 * @openapi
 * '/api/v1/question/byType/{id}':
 *  get:
 *     tags:
 *     - Question
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/QuestionsResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/byType/:id", requireUser, getQuestionByTypeHandler);

/**
 * @openapi
 * '/api/v1/question':
 *  get:
 *     tags:
 *     - Question
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/QuestionsResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/", requireUser, getQuestionsHandler);

export default router;
