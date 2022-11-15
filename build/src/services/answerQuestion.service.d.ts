import { Prisma } from "@prisma/client";
export declare const createAnswers: (input: Prisma.AnswerQuestionCreateManyInput[]) => Promise<Prisma.BatchPayload>;
export declare const createAnswer: (input: Prisma.AnswerQuestionCreateInput) => Promise<import(".prisma/client").AnswerQuestion>;
export declare const updateAnswers: (update: Prisma.AnswerQuestionUncheckedUpdateManyInput[]) => Promise<Prisma.BatchPayload>;
export declare const updateAnswer: (update: Prisma.AnswerQuestionUncheckedUpdateManyInput) => Promise<import(".prisma/client").AnswerQuestion>;
export declare const deleteAnswer: (id: number) => Promise<import(".prisma/client").AnswerQuestion>;
export declare const getAnswerById: (id: number) => Promise<import(".prisma/client").AnswerQuestion | null>;
export declare const getAnswersByQuestion: (id: number) => Promise<import(".prisma/client").AnswerQuestion[]>;
export declare const getAnswers: () => Promise<import(".prisma/client").AnswerQuestion[]>;
