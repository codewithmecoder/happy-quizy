import { Prisma } from "@prisma/client";
import { CreateQuestion } from "../DTOS/quizs/createQuizCommand";
export declare const createQuestion: (input: CreateQuestion) => Promise<import(".prisma/client").Question>;
export declare const updateQuestion: (update: Prisma.QuestionUpdateInput, id: number) => Promise<import(".prisma/client").Question>;
export declare const deleteQuestion: (id: number) => Promise<import(".prisma/client").Question>;
export declare const getQuestionById: (id: number) => Promise<import(".prisma/client").Question | null>;
export declare const getQuestionByType: (id: number) => Promise<(import(".prisma/client").Question & {
    typeQuestion: import(".prisma/client").TypeQuestion;
})[]>;
export declare const getQuestions: () => Promise<(import(".prisma/client").Question & {
    typeQuestion: import(".prisma/client").TypeQuestion;
})[]>;
