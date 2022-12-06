import { Prisma, PrismaClient, Score } from "@prisma/client";

const prismaClient = new PrismaClient();
export const addScore = async (
  score: Prisma.ScoreCreateInput
): Promise<Score> => {
  const data = await prismaClient.score.create({ data: score });
  return data;
};
