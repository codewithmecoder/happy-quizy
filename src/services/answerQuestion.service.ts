import { PrismaClient, Prisma } from "@prisma/client";
const prismaClient = new PrismaClient();

export const createAnswers = async (
  input: Prisma.AnswerQuestionCreateManyInput[]
) => {
  return await prismaClient.answerQuestion.createMany({
    data: input,
    skipDuplicates: true,
  });
};

export const updateAnswers = async (
  update: Prisma.AnswerQuestionUncheckedUpdateManyInput[]
) => {
  return await prismaClient.answerQuestion.updateMany({ data: update });
};

export const deleteAnswer = async (id: number) => {
  return await prismaClient.answerQuestion.delete({ where: { id } });
};

export const getAnswerById = async (id: number) => {
  return await prismaClient.answerQuestion.findFirst({ where: { id } });
};

export const getAnswersByType = async (id: number) => {
  return await prismaClient.answerQuestion.findMany({
    where: { questionId: id },
  });
};

export const getAnswers = async () => {
  return await prismaClient.answerQuestion.findMany({});
};

//getAnswers
