import express from "express";
import {
  createAnswerHandler,
  createAnswersHandler,
  deleteAnswerHandler,
  getAnswerQuestionByIdHandler,
  getAnswerQuestionByQuestionHandler,
  getAnswerQuestionsHandler,
  updateAnswersHandler,
} from "../controllers/answerQuestion.controller";
import { requireAdmin } from "../middlewares/requireAdmin.middleware";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

/**
 * @openapi
 * '/api/v1/asnwerQuestion':
 *  post:
 *     tags:
 *     - Answer Question
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateAnswerQuestion'
 *     responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.post("/", requireAdmin, createAnswersHandler);

/**
 * @openapi
 * '/api/v1/asnwerQuestion/createSingalAnswer':
 *  post:
 *     tags:
 *     - Answer Question
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateSingalAnswerQuestion'
 *     responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AnswerQuestionResponse'
 *      400:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.post("/createSingalAnswer", requireAdmin, createAnswerHandler);

/**
 * @openapi
 * '/api/v1/asnwerQuestion':
 *  put:
 *     tags:
 *     - Answer Question
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateAnswerQuestion'
 *     responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.put("/", requireAdmin, updateAnswersHandler);

/**
 * @openapi
 * '/api/v1/asnwerQuestion/{id}':
 *  delete:
 *     tags:
 *     - Answer Question
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
router.delete("/:id", requireAdmin, deleteAnswerHandler);

/**
 * @openapi
 * '/api/v1/asnwerQuestion/byId/{id}':
 *  get:
 *     tags:
 *     - Answer Question
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
 *              $ref: '#/components/schemas/AnswerQuestionResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/byId/:id", requireUser, getAnswerQuestionByIdHandler);

/**
 * @openapi
 * '/api/v1/asnwerQuestion/byQuestion/{id}':
 *  get:
 *     tags:
 *     - Answer Question
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
 *              $ref: '#/components/schemas/AnswerQuestionsResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/byQuestion/:id", requireUser, getAnswerQuestionByQuestionHandler);

/**
 * @openapi
 * '/api/v1/asnwerQuestion':
 *  get:
 *     tags:
 *     - Answer Question
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AnswerQuestionsResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/", requireUser, getAnswerQuestionsHandler);
export default router;
