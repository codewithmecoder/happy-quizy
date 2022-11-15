"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const requireAdmin_middleware_1 = require("../middlewares/requireAdmin.middleware");
const requireUser_middleware_1 = require("../middlewares/requireUser.middleware");
const router = express_1.default.Router();
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
router.put("/", requireUser_middleware_1.requireUser, user_controller_1.updateUserHandler);
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
router.put("/updateUserByAdmin", requireAdmin_middleware_1.requireAdmin, user_controller_1.updateAnyUserHandler);
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
router.get("/", requireUser_middleware_1.requireUser, user_controller_1.getCurrentUserHandler);
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
router.get("/getFullUser", requireUser_middleware_1.requireUser, user_controller_1.getFullUserHandler);
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
router.get("/getUsers", requireAdmin_middleware_1.requireAdmin, user_controller_1.getUsersHandler);
exports.default = router;
//# sourceMappingURL=user.route.js.map