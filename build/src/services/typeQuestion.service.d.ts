import { Prisma } from "@prisma/client";
export declare const createTypeQuestion: (input: Prisma.TypeQuestionCreateInput) => Promise<import(".prisma/client").TypeQuestion>;
export declare const getTypeQuestions: () => Promise<(import(".prisma/client").TypeQuestion & {
    questions: (import(".prisma/client").Question & {
        answerQuestions: import(".prisma/client").AnswerQuestion[];
    })[];
})[]>;
export declare const getOnlyTypeQuestions: () => Promise<import(".prisma/client").TypeQuestion[]>;
export declare const getTypeQuestion: (id: number) => Promise<(import(".prisma/client").TypeQuestion & {
    questions: (import(".prisma/client").Question & {
        answerQuestions: import(".prisma/client").AnswerQuestion[];
    })[];
}) | null>;
export declare const updateTypeQuestion: (update: Prisma.TypeQuestionUpdateInput, id: number) => Promise<import(".prisma/client").TypeQuestion>;
export declare const deleteTypeQuestion: (id: number) => Promise<import(".prisma/client").TypeQuestion>;
