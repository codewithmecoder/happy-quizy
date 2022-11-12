import express from "express";
import {
  createTypeQuestionHandler,
  deleteTypeQuestionHandler,
  getOnlyTypeQuestionsHandler,
  getTypeQuestionHandler,
  getTypeQuestionsHandler,
  updateTypeQuestionHandler,
} from "../controllers/typeQuestion.controller";
import { requireAdmin } from "../middlewares/requireAdmin.middleware";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

/**
 * @openapi
 * '/api/v1/typeQuestion':
 *  post:
 *     tags:
 *     - Type Question
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateTypeQuestion'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateTypeQuestionResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.post("/", requireAdmin, createTypeQuestionHandler);

/**
 * @openapi
 * '/api/v1/typeQuestion/{id}':
 *  put:
 *     tags:
 *     - Type Question
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateTypeQuestion'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateTypeQuestionResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.put("/:id", requireAdmin, updateTypeQuestionHandler);

/**
 * @openapi
 * '/api/v1/typeQuestion/{id}':
 *  delete:
 *     tags:
 *     - Type Question
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
router.delete("/:id", requireAdmin, deleteTypeQuestionHandler);

/**
 * @openapi
 * '/api/v1/typeQuestion':
 *  get:
 *     tags:
 *     - Type Question
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TypeQuestionsResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/", requireUser, getTypeQuestionsHandler);

/**
 * @openapi
 * '/api/v1/typeQuestion/onlyTypeQuestion':
 *  get:
 *     tags:
 *     - Type Question
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TypeQuestionsResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/onlyTypeQuestion", requireUser, getOnlyTypeQuestionsHandler);

/**
 * @openapi
 * '/api/v1/typeQuestion/{id}':
 *  get:
 *     tags:
 *     - Type Question
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
 *              $ref: '#/components/schemas/CreateTypeQuestionResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/:id", requireUser, getTypeQuestionHandler);

export default router;
