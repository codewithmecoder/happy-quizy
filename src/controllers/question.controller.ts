import { Question } from "@prisma/client";
import { Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { MessageResponse } from "../DTOS/messageResponse.dto";
import { CreateQuestion } from "../DTOS/quizs/createQuizCommand";
import {
  createQuestion,
  deleteQuestion,
  getQuestionById,
  getQuestionByType,
  getQuestions,
  updateQuestion,
} from "../services/question.service";

export const createQuestionHandler = async (
  req: Request<{}, {}, CreateQuestion>,
  res: Response<BaseResponse<Question | MessageResponse>>
) => {
  try {
    const question = await createQuestion(req.body);
    res.json({ data: question, success: true });
  } catch (error: any) {
    res.status(400).send({
      data: { message: "Could not create question" + error.message },
      success: false,
    });
  }
};

export const updateQuestionHandler = async (
  req: Request,
  res: Response<BaseResponse<Question | MessageResponse>>
) => {
  try {
    const { id } = req.params;
    const question = await updateQuestion(req.body, parseInt(id));
    res.status(200).send({ data: question, success: true });
  } catch (error: any) {
    res.status(500).send({
      data: { message: "Could not update question" },
      success: false,
    });
  }
};

export const deleteQuestionHandler = async (
  req: Request,
  res: Response<BaseResponse<MessageResponse>>
) => {
  try {
    const { id } = req.params;
    await deleteQuestion(parseInt(id));
    res.status(200).send({
      data: { message: "Delete question successfully!" },
      success: true,
    });
  } catch (error: any) {
    if (error.code === "P2003") {
      return res.status(400).send({
        data: {
          message: "Question already have the answers. You can't delete it.",
        },
        success: false,
      });
    } else if (error.code === "P2025") {
      return res.status(400).send({
        success: false,
        data: { message: "Record to delete does not exist." },
      });
    } else {
      return res.status(500).send({
        data: { message: "Could not delete question" },
        success: false,
      });
    }
  }
};

export const getQuestionByIdHandler = async (
  req: Request,
  res: Response<BaseResponse<Question | MessageResponse>>
) => {
  try {
    const { id } = req.params;
    const question = await getQuestionById(parseInt(id));
    if (question)
      res.status(200).send({
        data: question,
        success: true,
      });
    res
      .status(404)
      .send({ data: { message: "Question not found!" }, success: false });
  } catch (error: any) {
    res.status(500).send({
      data: { message: "Something went wrong!" },
      success: false,
    });
  }
};

export const getQuestionByTypeHandler = async (
  req: Request,
  res: Response<BaseResponse<Question[] | MessageResponse>>
) => {
  try {
    const { id } = req.params;
    const questions = await getQuestionByType(parseInt(id));
    res.status(200).send({
      data: questions,
      success: true,
    });
  } catch (error: any) {
    res.status(500).send({
      data: { message: "Something went wrong!" },
      success: false,
    });
  }
};

export const getQuestionsHandler = async (
  req: Request,
  res: Response<BaseResponse<Question[] | MessageResponse>>
) => {
  try {
    const questions = await getQuestions();
    res.status(200).send({
      data: questions,
      success: true,
    });
  } catch (error: any) {
    res.status(500).send({
      data: { message: "Something went wrong!" },
      success: false,
    });
  }
};
