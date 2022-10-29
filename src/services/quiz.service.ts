import { PrismaClient, Prisma } from "@prisma/client";
import { CreateQuestion } from "../DTOS/quizs/createQuestionCommand";

const prismaClient = new PrismaClient();

export const createTypeQuestion = async (
  input: Prisma.TypeQuestionCreateInput
) => {
  return await prismaClient.typeQuestion.create({ data: input });
};

export const getTypeQuestions = async () => {
  return await prismaClient.typeQuestion.findMany({
    include: { answerQuestions: {}, questions: {} },
  });
};

export const updateTypeQuestion = async (
  update: Prisma.TypeQuestionUpdateInput,
  id: number
) => {
  return await prismaClient.typeQuestion.update({
    data: update,
    where: { id: id },
  });
};

export const createQuestion = async (input: CreateQuestion) => {
  const data = input as Prisma.QuestionCreateInput;
  return await prismaClient.question.create({
    data: {
      ...data,
      answerQuestions: { connect: { id: input.typeQuestionId } },
    },
  });
};
