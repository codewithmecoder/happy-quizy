import express, { Request, Response } from "express";
import {
  getCurrentUserHandler,
  getFullUserHandler,
} from "../controllers/user.controller";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

/**
 * @openapi
 * '/api/v1/user':
 *  get:
 *     tags:
 *     - User
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CurrentUserResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/", requireUser, getCurrentUserHandler);

/**
 * @openapi
 * '/api/v1/user/getFullUser':
 *  get:
 *     tags:
 *     - User
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/getFullUser", requireUser, getFullUserHandler);

export default router;
