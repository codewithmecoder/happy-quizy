import { Prisma } from "@prisma/client";
export declare type CreateQuestion = {
    typeQuestionId: number;
} & Prisma.QuestionCreateInput;
export declare type CreateAnswer = {
    questionId: number;
} & Prisma.AnswerQuestionCreateInput;
