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
exports.deleteTypeQuestion = exports.updateTypeQuestion = exports.getTypeQuestion = exports.getOnlyTypeQuestions = exports.getTypeQuestions = exports.createTypeQuestion = void 0;
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
const createTypeQuestion = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.typeQuestion.create({ data: input });
});
exports.createTypeQuestion = createTypeQuestion;
const getTypeQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.typeQuestion.findMany({
        include: {
            questions: {
                include: {
                    answerQuestions: {},
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });
});
exports.getTypeQuestions = getTypeQuestions;
const getOnlyTypeQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.typeQuestion.findMany({
        orderBy: { createdAt: "desc" },
    });
});
exports.getOnlyTypeQuestions = getOnlyTypeQuestions;
const getTypeQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.typeQuestion.findFirst({
        where: { id },
        include: {
            questions: {
                include: {
                    answerQuestions: {},
                },
            },
        },
    });
});
exports.getTypeQuestion = getTypeQuestion;
const updateTypeQuestion = (update, id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.typeQuestion.update({
        data: Object.assign(Object.assign({}, update), { updatedAt: new Date(Date.now()) }),
        where: { id: id },
    });
});
exports.updateTypeQuestion = updateTypeQuestion;
const deleteTypeQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient.typeQuestion.delete({ where: { id } });
});
exports.deleteTypeQuestion = deleteTypeQuestion;
//# sourceMappingURL=typeQuestion.service.js.map