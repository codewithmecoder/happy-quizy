import { Prisma, PrismaClient } from "@prisma/client";

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
    orderBy: { createdAt: "desc" },
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
    data: { ...update, updatedAt: new Date(Date.now()) },
    where: { id: id },
  });
};

export const deleteTypeQuestion = async (id: number) => {
  return await prismaClient.typeQuestion.delete({ where: { id } });
};
