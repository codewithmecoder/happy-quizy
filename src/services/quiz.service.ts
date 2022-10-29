import { PrismaClient, Prisma, AnswerQuestion } from "@prisma/client";
import { CreateAnswer, CreateQuestion } from "../DTOS/quizs/createQuizCommand";

const prismaClient = new PrismaClient();

export const createTypeQuestion = async (
  input: Prisma.TypeQuestionCreateInput
) => {
  return await prismaClient.typeQuestion.create({ data: input });
};

export const getTypeQuestions = async () => {
  return await prismaClient.typeQuestion.findMany({
    include: {
      questions: {
        include: {
          answerQuestions: {},
        },
      },
    },
  });
};

export const getTypeQuestion = async (id: number) => {
  return await prismaClient.typeQuestion.findFirst({
    where: { id },
    include: {
      questions: {
        include: {
          answerQuestions: {},
        },
      },
    },
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

export const deleteTypeQuestion = async (id: number) => {
  return await prismaClient.typeQuestion.delete({ where: { id } });
};

// question section //
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
    data: update,
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
// end answer section //

export const createAnswers = async (
  input: Prisma.AnswerQuestionCreateManyInput[]
) => {
  return await prismaClient.answerQuestion.createMany({
    data: input,
    skipDuplicates: true,
  });
};
