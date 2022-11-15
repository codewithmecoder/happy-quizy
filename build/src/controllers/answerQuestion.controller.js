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
exports.getAnswerQuestionsHandler = exports.getAnswerQuestionByQuestionHandler = exports.getAnswerQuestionByIdHandler = exports.deleteAnswerHandler = exports.updateAnswerHandler = exports.updateAnswersHandler = exports.createAnswerHandler = exports.createAnswersHandler = void 0;
const answerQuestion_service_1 = require("../services/answerQuestion.service");
const createAnswersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questionsCount = yield (0, answerQuestion_service_1.createAnswers)(req.body);
        res.json({ data: { message: `${questionsCount.count}` }, success: true });
    }
    catch (error) {
        res.status(400).send({
            data: { message: "Could not create answers" },
            success: false,
        });
    }
});
exports.createAnswersHandler = createAnswersHandler;
const createAnswerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.iscorrect) {
            const answers = yield (0, answerQuestion_service_1.getAnswersByQuestion)(req.body.questionId);
            const rightAnswer = answers.filter((i) => i.iscorrect === true)[0];
            if (rightAnswer)
                return res.status(409).send({
                    data: { message: "The answer already existed!" },
                    success: false,
                });
        }
        const answer = yield (0, answerQuestion_service_1.createAnswer)(req.body);
        res.json({ data: answer, success: true });
    }
    catch (error) {
        res.status(400).send({
            data: { message: "Could not create answer" },
            success: false,
        });
    }
});
exports.createAnswerHandler = createAnswerHandler;
const updateAnswersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answerBatch = yield (0, answerQuestion_service_1.updateAnswers)(req.body);
        res
            .status(200)
            .send({ data: { message: answerBatch.count.toString() }, success: true });
    }
    catch (error) {
        res.status(500).send({
            data: { message: "Could not update answers" },
            success: false,
        });
    }
});
exports.updateAnswersHandler = updateAnswersHandler;
const updateAnswerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield (0, answerQuestion_service_1.updateAnswer)(req.body);
        res.status(200).send({ data: answer, success: true });
    }
    catch (error) {
        res.status(500).send({
            data: { message: "Could not update answers" },
            success: false,
        });
    }
});
exports.updateAnswerHandler = updateAnswerHandler;
const deleteAnswerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, answerQuestion_service_1.deleteAnswer)(parseInt(id));
        res.status(200).send({
            data: { message: "Delete answer successfully!" },
            success: true,
        });
    }
    catch (error) {
        res.status(500).send({
            data: { message: "Could not delete answer" },
            success: false,
        });
    }
});
exports.deleteAnswerHandler = deleteAnswerHandler;
const getAnswerQuestionByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const answer = yield (0, answerQuestion_service_1.getAnswerById)(parseInt(id));
        if (answer)
            res.status(200).send({
                data: answer,
                success: true,
            });
        res
            .status(404)
            .send({ data: { message: "Answer not found!" }, success: true });
    }
    catch (error) {
        res.status(500).send({
            data: { message: "Something went wrong!" },
            success: false,
        });
    }
});
exports.getAnswerQuestionByIdHandler = getAnswerQuestionByIdHandler;
function getAnswerQuestionByQuestionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const answers = yield (0, answerQuestion_service_1.getAnswersByQuestion)(parseInt(id));
            res.status(200).send({
                data: answers,
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
}
exports.getAnswerQuestionByQuestionHandler = getAnswerQuestionByQuestionHandler;
function getAnswerQuestionsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const answers = yield (0, answerQuestion_service_1.getAnswers)();
            res.status(200).send({
                data: answers,
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
}
exports.getAnswerQuestionsHandler = getAnswerQuestionsHandler;
//getAnswerQuestionsHandler
//# sourceMappingURL=answerQuestion.controller.js.map