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
exports.getQuestions = exports.getQuestionByType = exports.getQuestionById = exports.deleteQuestion = exports.updateQuestion = exports.createQuestion = void 0;
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
const createQuestion = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.question.create({
        data: {
            content: input.content,
            typeQuestion: { connect: { id: input.typeQuestionId } },
        },
    });
});
exports.createQuestion = createQuestion;
const updateQuestion = (update, id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.question.update({
        data: Object.assign(Object.assign({}, update), { updatedAt: new Date(Date.now()) }),
        where: { id: id },
    });
});
exports.updateQuestion = updateQuestion;
const deleteQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.question.delete({
        where: { id: id },
    });
});
exports.deleteQuestion = deleteQuestion;
const getQuestionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.question.findFirst({
        where: { id: id },
    });
});
exports.getQuestionById = getQuestionById;
const getQuestionByType = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.question.findMany({
        where: { typeQuestionId: id },
        include: { typeQuestion: {} },
    });
});
exports.getQuestionByType = getQuestionByType;
const getQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.question.findMany({
        include: { typeQuestion: {} },
    });
});
exports.getQuestions = getQuestions;
//# sourceMappingURL=question.service.js.map