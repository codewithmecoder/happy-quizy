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
exports.deleteTypeQuestionHandler = exports.updateTypeQuestionHandler = exports.getOnlyTypeQuestionsHandler = exports.getTypeQuestionHandler = exports.getTypeQuestionsHandler = exports.createTypeQuestionHandler = void 0;
const typeQuestion_service_1 = require("../services/typeQuestion.service");
const createTypeQuestionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const typeQuestion = yield (0, typeQuestion_service_1.createTypeQuestion)(req.body);
        res.json({ data: typeQuestion, success: true });
    }
    catch (error) {
        res.json({ data: { message: error.message }, success: false });
    }
});
exports.createTypeQuestionHandler = createTypeQuestionHandler;
const getTypeQuestionsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, typeQuestion_service_1.getTypeQuestions)();
        res.json({ data, success: true });
    }
    catch (error) {
        res.json({ data: { message: error.message }, success: false });
    }
});
exports.getTypeQuestionsHandler = getTypeQuestionsHandler;
const getTypeQuestionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, typeQuestion_service_1.getTypeQuestion)(parseInt(id));
        if (data)
            return res.status(200).send({ data, success: true });
        res
            .status(404)
            .send({ data: { message: "Type question not found!" }, success: true });
    }
    catch (error) {
        res.status(500).send({ data: { message: error.message }, success: false });
    }
});
exports.getTypeQuestionHandler = getTypeQuestionHandler;
const getOnlyTypeQuestionsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, typeQuestion_service_1.getOnlyTypeQuestions)();
        res.json({ data, success: true });
    }
    catch (error) {
        res.json({ data: { message: error.message }, success: false });
    }
});
exports.getOnlyTypeQuestionsHandler = getOnlyTypeQuestionsHandler;
const updateTypeQuestionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, typeQuestion_service_1.updateTypeQuestion)(req.body, parseInt(id));
        res.json({ data, success: true });
    }
    catch (error) {
        res.json({ data: { message: error.message }, success: false });
    }
});
exports.updateTypeQuestionHandler = updateTypeQuestionHandler;
const deleteTypeQuestionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, typeQuestion_service_1.deleteTypeQuestion)(parseInt(id));
        res.status(200).send({
            data: { message: "delete type question successfully!" },
            success: true,
        });
    }
    catch (error) {
        if (error.code === "P2003") {
            res.status(500).send({
                data: {
                    message: "Cannot delete. Type question already has the references",
                },
                success: false,
            });
        }
        else {
            res.status(500).send({
                data: {
                    message: "Something went wrong!",
                },
                success: false,
            });
        }
    }
});
exports.deleteTypeQuestionHandler = deleteTypeQuestionHandler;
//# sourceMappingURL=typeQuestion.controller.js.map