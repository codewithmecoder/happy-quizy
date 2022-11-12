import express, { Request, Response } from "express";
import {
  getCurrentUserHandler,
  getFullUserHandler,
  getUsersHandler,
  updateAnyUserHandler,
  updateUserHandler,
} from "../controllers/user.controller";
import { requireAdmin } from "../middlewares/requireAdmin.middleware";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

/**
 * @openapi
 * '/api/v1/user':
 *  put:
 *     tags:
 *     - User
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateUserInput'
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
router.put("/", requireUser, updateUserHandler);

/**
 * @openapi
 * '/api/v1/user/updateUserByAdmin':
 *  put:
 *     tags:
 *     - User
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateAnyUserInput'
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
router.put("/updateUserByAdmin", requireAdmin, updateAnyUserHandler);

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

/**
 * @openapi
 * '/api/v1/user/getUsers':
 *  get:
 *     tags:
 *     - User
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UsersResponse'
 *      400:
 *        description: Message Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MessageResponse'
 */
router.get("/getUsers", requireAdmin, getUsersHandler);

export default router;
