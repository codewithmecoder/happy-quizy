import { Prisma } from "@prisma/client";

export type CreateQuestion = {
  typeQuestionId: number;
} & Prisma.QuestionCreateInput;

export type CreateAnswer = {
  questionId: number;
} & Prisma.AnswerQuestionCreateInput;
