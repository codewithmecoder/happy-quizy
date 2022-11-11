import express, { Request, Response } from "express";
import {
  loginUserHandler,
  logoutHandler,
  registerUserHandler,
} from "../controllers/auth.controller";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();
/**
 * @openapi
 * '/api/v1/auth/register':
 *  post:
 *     tags:
 *     - Auth
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UserCreateInput'
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
router.post("/register", registerUserHandler);

/**
 * @openapi
 * '/api/v1/auth/login':
 *  post:
 *     tags:
 *     - Auth
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/LoginUser'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserLoginResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.post("/login", loginUserHandler);

/**
 * @openapi
 * '/api/v1/auth/logout':
 *  post:
 *     tags:
 *     - Auth
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.post("/logout", requireUser, logoutHandler);
export default router;
