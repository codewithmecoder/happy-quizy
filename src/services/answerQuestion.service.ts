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

export const createAnswer = async (input: Prisma.AnswerQuestionCreateInput) => {
  return await prismaClient.answerQuestion.create({
    data: input,
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

export const getAnswersByQuestion = async (id: number) => {
  console.log("id => ", id);
  return await prismaClient.answerQuestion.findMany({
    where: { questionId: id },
  });
};

export const getAnswers = async () => {
  return await prismaClient.answerQuestion.findMany({});
};

//getAnswers
