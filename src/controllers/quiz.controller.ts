import { Prisma, Question, TypeQuestion } from "@prisma/client";
import { Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { CreateQuestion } from "../DTOS/quizs/createQuestionCommand";
import {
  createQuestion,
  createTypeQuestion,
  getTypeQuestions,
  updateTypeQuestion,
} from "../services/quiz.service";

export const createTypeQuestionHandler = async (
  req: Request<{}, {}, Prisma.TypeQuestionCreateInput>,
  res: Response<BaseResponse<TypeQuestion | { message: string }>>
) => {
  try {
    const typeQuestion = await createTypeQuestion(req.body);
    res.json({ data: typeQuestion, success: true });
  } catch (error: any) {
    res.json({ data: { message: error.message }, success: false });
  }
};

export const getTypeQuestionsHandler = async (
  req: Request,
  res: Response<BaseResponse<TypeQuestion[] | { message: string }>>
) => {
  try {
    const data = await getTypeQuestions();
    res.json({ data, success: true });
  } catch (error: any) {
    res.json({ data: { message: error.message }, success: true });
  }
};

export const updateTypeQuestionHandler = async (
  req: Request,
  res: Response<BaseResponse<TypeQuestion | { message: string }>>
) => {
  try {
    const { id } = req.params;
    const data = await updateTypeQuestion(req.body, parseInt(id));
    res.json({ data, success: true });
  } catch (error: any) {
    res.json({ data: { message: error.message }, success: false });
  }
};

// question section //
export const createQuestionHandler = async (
  req: Request<{}, {}, CreateQuestion>,
  res: Response<BaseResponse<Question | { message: string }>>
) => {
  try {
    const question = await createQuestion(req.body);
    res.json({ data: question, success: true });
  } catch (error: any) {
    res.json({
      data: { message: "Could not create question" },
      success: false,
    });
  }
};
