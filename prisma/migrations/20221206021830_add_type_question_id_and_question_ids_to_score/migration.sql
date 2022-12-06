/*
  Warnings:

  - Added the required column `typeQuestionId` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "questionIds" INTEGER[],
ADD COLUMN     "typeQuestionId" INTEGER NOT NULL;
