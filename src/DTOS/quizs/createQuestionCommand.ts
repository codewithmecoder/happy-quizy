import { Prisma } from "@prisma/client";

export type CreateQuestion = {
  typeQuestionId: number;
} & Prisma.QuestionCreateInput;
