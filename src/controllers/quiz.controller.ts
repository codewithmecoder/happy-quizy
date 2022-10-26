import { Prisma, TypeQuestion } from "@prisma/client";
import { Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import {
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
