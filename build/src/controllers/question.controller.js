"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionsHandler = exports.getQuestionByTypeHandler = exports.getQuestionByIdHandler = exports.deleteQuestionHandler = exports.updateQuestionHandler = exports.createQuestionHandler = void 0;
const question_service_1 = require("../services/question.service");
const createQuestionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield (0, question_service_1.createQuestion)(req.body);
        res.json({ data: question, success: true });
    }
    catch (error) {
        res.status(400).send({
            data: { message: "Could not create question" + error.message },
            success: false,
        });
    }
});
exports.createQuestionHandler = createQuestionHandler;
const updateQuestionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const question = yield (0, question_service_1.updateQuestion)(req.body, parseInt(id));
        res.status(200).send({ data: question, success: true });
    }
    catch (error) {
        res.status(500).send({
            data: { message: "Could not update question" },
            success: false,
        });
    }
});
exports.updateQuestionHandler = updateQuestionHandler;
const deleteQuestionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, question_service_1.deleteQuestion)(parseInt(id));
        res.status(200).send({
            data: { message: "Delete question successfully!" },
            success: true,
        });
    }
    catch (error) {
        if (error.code === "P2003") {
            return res.status(400).send({
                data: {
                    message: "Question already have the answers. You can't delete it.",
                },
                success: false,
            });
        }
        else if (error.code === "P2025") {
            return res.status(400).send({
                success: false,
                data: { message: "Record to delete does not exist." },
            });
        }
        else {
            return res.status(500).send({
                data: { message: "Could not delete question" },
                success: false,
            });
        }
    }
});
exports.deleteQuestionHandler = deleteQuestionHandler;
const getQuestionByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const question = yield (0, question_service_1.getQuestionById)(parseInt(id));
        if (question)
            res.status(200).send({
                data: question,
                success: true,
            });
        res
            .status(404)
            .send({ data: { message: "Question not found!" }, success: true });
    }
    catch (error) {
        res.status(500).send({
            data: { message: "Something went wrong!" },
            success: false,
        });
    }
});
exports.getQuestionByIdHandler = getQuestionByIdHandler;
const getQuestionByTypeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const questions = yield (0, question_service_1.getQuestionByType)(parseInt(id));
        res.status(200).send({
            data: questions,
            success: true,
        });
    }
    catch (error) {
        res.status(500).send({
            data: { message: "Something went wrong!" },
            success: false,
        });
    }
});
exports.getQuestionByTypeHandler = getQuestionByTypeHandler;
const getQuestionsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield (0, question_service_1.getQuestions)();
        res.status(200).send({
            data: questions,
            success: true,
        });
    }
    catch (error) {
        res.status(500).send({
            data: { message: "Something went wrong!" },
            success: false,
        });
    }
});
exports.getQuestionsHandler = getQuestionsHandler;
//# sourceMappingURL=question.controller.js.map