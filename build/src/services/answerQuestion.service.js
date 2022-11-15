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
exports.getAnswers = exports.getAnswersByQuestion = exports.getAnswerById = exports.deleteAnswer = exports.updateAnswer = exports.updateAnswers = exports.createAnswer = exports.createAnswers = void 0;
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
const createAnswers = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.answerQuestion.createMany({
        data: input,
        skipDuplicates: true,
    });
});
exports.createAnswers = createAnswers;
const createAnswer = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.answerQuestion.create({
        data: input,
    });
});
exports.createAnswer = createAnswer;
const updateAnswers = (update) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.answerQuestion.updateMany({ data: update });
});
exports.updateAnswers = updateAnswers;
const updateAnswer = (update) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const id = parseInt((_b = (_a = update.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "0");
    return yield prismaClient.answerQuestion.update({
        where: { id },
        data: update,
    });
});
exports.updateAnswer = updateAnswer;
const deleteAnswer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.answerQuestion.delete({ where: { id } });
});
exports.deleteAnswer = deleteAnswer;
const getAnswerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.answerQuestion.findFirst({ where: { id } });
});
exports.getAnswerById = getAnswerById;
const getAnswersByQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.answerQuestion.findMany({
        where: { questionId: id },
    });
});
exports.getAnswersByQuestion = getAnswersByQuestion;
const getAnswers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.answerQuestion.findMany({});
});
exports.getAnswers = getAnswers;
//getAnswers
//# sourceMappingURL=answerQuestion.service.js.map