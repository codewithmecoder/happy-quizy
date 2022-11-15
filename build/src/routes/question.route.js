"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const question_controller_1 = require("../controllers/question.controller");
const requireAdmin_middleware_1 = require("../middlewares/requireAdmin.middleware");
const requireUser_middleware_1 = require("../middlewares/requireUser.middleware");
const router = express_1.default.Router();
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
router.post("/", requireAdmin_middleware_1.requireAdmin, question_controller_1.createQuestionHandler);
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
router.put("/:id", requireAdmin_middleware_1.requireAdmin, question_controller_1.updateQuestionHandler);
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
router.delete("/:id", requireAdmin_middleware_1.requireAdmin, question_controller_1.deleteQuestionHandler);
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
router.get("/byId/:id", requireUser_middleware_1.requireUser, question_controller_1.getQuestionByIdHandler);
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
router.get("/byType/:id", requireUser_middleware_1.requireUser, question_controller_1.getQuestionByTypeHandler);
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
router.get("/", requireUser_middleware_1.requireUser, question_controller_1.getQuestionsHandler);
exports.default = router;
//# sourceMappingURL=question.route.js.map