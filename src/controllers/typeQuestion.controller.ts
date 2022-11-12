import { Prisma, TypeQuestion } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { MessageResponse } from "../DTOS/messageResponse.dto";
import {
  createTypeQuestion,
  deleteTypeQuestion,
  getTypeQuestion,
  getTypeQuestions,
  updateTypeQuestion,
} from "../services/typeQuestion.service";

export const createTypeQuestionHandler = async (
  req: Request<{}, {}, Prisma.TypeQuestionCreateInput>,
  res: Response<BaseResponse<TypeQuestion | MessageResponse>>
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
  res: Response<BaseResponse<TypeQuestion[] | MessageResponse>>
) => {
  try {
    const data = await getTypeQuestions();
    res.json({ data, success: true });
  } catch (error: any) {
    res.json({ data: { message: error.message }, success: true });
  }
};

export const getTypeQuestionHandler = async (
  req: Request,
  res: Response<BaseResponse<TypeQuestion | MessageResponse>>
) => {
  try {
    const { id } = req.params;
    const data = await getTypeQuestion(parseInt(id));
    if (data) return res.status(200).send({ data, success: true });
    res
      .status(404)
      .send({ data: { message: "Type question not found!" }, success: true });
  } catch (error: any) {
    res.status(500).send({ data: { message: error.message }, success: true });
  }
};

export const updateTypeQuestionHandler = async (
  req: Request,
  res: Response<BaseResponse<TypeQuestion | MessageResponse>>
) => {
  try {
    const { id } = req.params;
    const data = await updateTypeQuestion(req.body, parseInt(id));
    res.json({ data, success: true });
  } catch (error: any) {
    res.json({ data: { message: error.message }, success: false });
  }
};

export const deleteTypeQuestionHandler = async (
  req: Request,
  res: Response<BaseResponse<MessageResponse>>
) => {
  try {
    const { id } = req.params;
    await deleteTypeQuestion(parseInt(id));
    res.status(200).send({
      data: { message: "delete type question successfully!" },
      success: true,
    });
  } catch (error: any) {
    if (error.code === "P2003") {
      res.status(500).send({
        data: {
          message: "Cannot delete. Type question already has the references",
        },
        success: false,
      });
    } else {
      res.status(500).send({
        data: {
          message: "Something went wrong!",
        },
        success: false,
      });
    }
  }
};
