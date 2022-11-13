import { AnswerQuestion, Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { MessageResponse } from "../DTOS/messageResponse.dto";
import {
  createAnswer,
  createAnswers,
  deleteAnswer,
  getAnswerById,
  getAnswers,
  getAnswersByQuestion,
  updateAnswers,
} from "../services/answerQuestion.service";
import { CreateAnswerQuestionModel } from "../swagger/schemas/answerQuestion.schema";

export const createAnswersHandler = async (
  req: Request<{}, {}, Prisma.AnswerQuestionCreateManyInput[]>,
  res: Response<BaseResponse<MessageResponse>>
) => {
  try {
    const questionsCount = await createAnswers(req.body);
    res.json({ data: { message: `${questionsCount.count}` }, success: true });
  } catch (error: any) {
    res.status(400).send({
      data: { message: "Could not create answers" },
      success: false,
    });
  }
};

export const createAnswerHandler = async (
  req: Request<{}, {}, CreateAnswerQuestionModel>,
  res: Response<BaseResponse<AnswerQuestion | MessageResponse>>
) => {
  try {
    if (req.body.iscorrect) {
      const answers = await getAnswersByQuestion(req.body.questionId);
      const rightAnswer = answers.filter((i) => i.iscorrect === true)[0];
      if (rightAnswer)
        return res.status(409).send({
          data: { message: "The answer already existed!" },
          success: false,
        });
    }
    const answer = await createAnswer(req.body);
    res.json({ data: answer, success: true });
  } catch (error: any) {
    res.status(400).send({
      data: { message: "Could not create answer" },
      success: false,
    });
  }
};

export const updateAnswersHandler = async (
  req: Request<{}, {}, Prisma.AnswerQuestionUncheckedUpdateManyInput[]>,
  res: Response<BaseResponse<MessageResponse>>
) => {
  try {
    const question = await updateAnswers(req.body);
    res
      .status(200)
      .send({ data: { message: question.count.toString() }, success: true });
  } catch (error: any) {
    res.status(500).send({
      data: { message: "Could not update answers" },
      success: false,
    });
  }
};

export const deleteAnswerHandler = async (
  req: Request,
  res: Response<BaseResponse<MessageResponse>>
) => {
  try {
    const { id } = req.params;
    await deleteAnswer(parseInt(id));
    res.status(200).send({
      data: { message: "Delete answer successfully!" },
      success: true,
    });
  } catch (error: any) {
    res.status(500).send({
      data: { message: "Could not delete answer" },
      success: false,
    });
  }
};

export const getAnswerQuestionByIdHandler = async (
  req: Request,
  res: Response<BaseResponse<AnswerQuestion | MessageResponse>>
) => {
  try {
    const { id } = req.params;
    const answer = await getAnswerById(parseInt(id));
    if (answer)
      res.status(200).send({
        data: answer,
        success: true,
      });
    res
      .status(404)
      .send({ data: { message: "Answer not found!" }, success: true });
  } catch (error: any) {
    res.status(500).send({
      data: { message: "Something went wrong!" },
      success: false,
    });
  }
};

export async function getAnswerQuestionByQuestionHandler(
  req: Request,
  res: Response<BaseResponse<AnswerQuestion[] | MessageResponse>>
) {
  try {
    const { id } = req.params;
    const answers = await getAnswersByQuestion(parseInt(id));
    res.status(200).send({
      data: answers,
      success: true,
    });
  } catch (error: any) {
    res.status(500).send({
      data: { message: "Something went wrong!" },
      success: false,
    });
  }
}

export async function getAnswerQuestionsHandler(
  req: Request,
  res: Response<BaseResponse<AnswerQuestion[] | MessageResponse>>
) {
  try {
    const answers = await getAnswers();
    res.status(200).send({
      data: answers,
      success: true,
    });
  } catch (error: any) {
    res.status(500).send({
      data: { message: "Something went wrong!" },
      success: false,
    });
  }
}
//getAnswerQuestionsHandler
