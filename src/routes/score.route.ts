import express from "express";
import { addScoreHandler } from "../controllers/score.controller";

const router = express.Router();

/**
 * @openapi
 * '/api/v1/score':
 *  post:
 *     tags:
 *     - Score
 *     summary: 'questionIds: "1,2,3,4,8"'
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateScore'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateScoreResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.post("/", addScoreHandler);

export default router;
