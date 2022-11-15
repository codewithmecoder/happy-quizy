"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeQuestion_controller_1 = require("../controllers/typeQuestion.controller");
const requireAdmin_middleware_1 = require("../middlewares/requireAdmin.middleware");
const requireUser_middleware_1 = require("../middlewares/requireUser.middleware");
const router = express_1.default.Router();
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
router.post("/", requireAdmin_middleware_1.requireAdmin, typeQuestion_controller_1.createTypeQuestionHandler);
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
router.put("/:id", requireAdmin_middleware_1.requireAdmin, typeQuestion_controller_1.updateTypeQuestionHandler);
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
router.delete("/:id", requireAdmin_middleware_1.requireAdmin, typeQuestion_controller_1.deleteTypeQuestionHandler);
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
router.get("/", requireUser_middleware_1.requireUser, typeQuestion_controller_1.getTypeQuestionsHandler);
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
router.get("/onlyTypeQuestion", requireUser_middleware_1.requireUser, typeQuestion_controller_1.getOnlyTypeQuestionsHandler);
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
router.get("/:id", requireUser_middleware_1.requireUser, typeQuestion_controller_1.getTypeQuestionHandler);
exports.default = router;
//# sourceMappingURL=typeQuestion.route.js.map