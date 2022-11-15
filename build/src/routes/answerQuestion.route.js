"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const answerQuestion_controller_1 = require("../controllers/answerQuestion.controller");
const requireAdmin_middleware_1 = require("../middlewares/requireAdmin.middleware");
const requireUser_middleware_1 = require("../middlewares/requireUser.middleware");
const router = express_1.default.Router();
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
router.post("/", requireAdmin_middleware_1.requireAdmin, answerQuestion_controller_1.createAnswersHandler);
/**
 * @openapi
 * '/api/v1/asnwerQuestion/createSingleAnswer':
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
router.post("/createSingleAnswer", requireAdmin_middleware_1.requireAdmin, answerQuestion_controller_1.createAnswerHandler);
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
router.put("/", requireAdmin_middleware_1.requireAdmin, answerQuestion_controller_1.updateAnswersHandler);
/**
 * @openapi
 * '/api/v1/asnwerQuestion/updateSingleAnswer':
 *  put:
 *     tags:
 *     - Answer Question
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateSingleAnswerQuestion'
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
router.put("/updateSingleAnswer", requireAdmin_middleware_1.requireAdmin, answerQuestion_controller_1.updateAnswerHandler);
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
router.delete("/:id", requireAdmin_middleware_1.requireAdmin, answerQuestion_controller_1.deleteAnswerHandler);
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
router.get("/byId/:id", requireUser_middleware_1.requireUser, answerQuestion_controller_1.getAnswerQuestionByIdHandler);
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
router.get("/byQuestion/:id", requireUser_middleware_1.requireUser, answerQuestion_controller_1.getAnswerQuestionByQuestionHandler);
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
router.get("/", requireUser_middleware_1.requireUser, answerQuestion_controller_1.getAnswerQuestionsHandler);
exports.default = router;
//# sourceMappingURL=answerQuestion.route.js.map