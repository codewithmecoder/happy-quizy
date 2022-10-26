import { PrismaClient, Prisma } from "@prisma/client";

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
