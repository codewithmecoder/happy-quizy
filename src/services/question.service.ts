import { Prisma, PrismaClient } from "@prisma/client";
import { CreateQuestion } from "../DTOS/quizs/createQuizCommand";

const prismaClient = new PrismaClient();

export const createQuestion = async (input: CreateQuestion) => {
  return await prismaClient.question.create({
    data: {
      content: input.content,
      typeQuestion: { connect: { id: input.typeQuestionId } },
    },
  });
};

export const updateQuestion = async (
  update: Prisma.QuestionUpdateInput,
  id: number
) => {
  return await prismaClient.question.update({
    data: { ...update, updatedAt: new Date(Date.now()) },
    where: { id: id },
  });
};

export const deleteQuestion = async (id: number) => {
  return await prismaClient.question.delete({
    where: { id: id },
  });
};

export const getQuestionById = async (id: number) => {
  return await prismaClient.question.findFirst({
    where: { id: id },
  });
};

export const getQuestionByType = async (id: number) => {
  return await prismaClient.question.findMany({
    where: { typeQuestionId: id },
  });
};

export const getQuestions = async () => {
  return await prismaClient.question.findMany({
    // include: {},
  });
};
