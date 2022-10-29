import { Prisma, Question, TypeQuestion } from "@prisma/client";
import { Request, Response } from "express";
import { resolve } from "path";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { MessageResponse } from "../DTOS/messageResponse.dto";
import { CreateAnswer, CreateQuestion } from "../DTOS/quizs/createQuizCommand";
import {
  createAnswers,
  createQuestion,
  createTypeQuestion,
  deleteQuestion,
  deleteTypeQuestion,
  getQuestionById,
  getQuestionByType,
  getTypeQuestion,
  getTypeQuestions,
  updateQuestion,
  updateTypeQuestion,
} from "../services/quiz.service";

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
    res.status(500).send({
      data: { message: "something went wrong!" },
      success: false,
    });
  }
};

// question section //
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
    res.status(500).send({
      data: { message: "Could not delete question" },
      success: false,
    });
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
      .send({ data: { message: "Question not found!" }, success: true });
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
// end question section //

// question section //
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

// export const updateQuestionHandler = async (
//   req: Request,
//   res: Response<BaseResponse<Question | MessageResponse>>
// ) => {
//   try {
//     const { id } = req.params;
//     const question = await updateQuestion(req.body, parseInt(id));
//     res.status(200).send({ data: question, success: true });
//   } catch (error: any) {
//     res.status(500).send({
//       data: { message: "Could not update question" },
//       success: false,
//     });
//   }
// };

// export const deleteQuestionHandler = async (
//   req: Request,
//   res: Response<BaseResponse<MessageResponse>>
// ) => {
//   try {
//     const { id } = req.params;
//     await deleteQuestion(parseInt(id));
//     res.status(200).send({
//       data: { message: "Delete question successfully!" },
//       success: true,
//     });
//   } catch (error: any) {
//     res.status(500).send({
//       data: { message: "Could not delete question" },
//       success: false,
//     });
//   }
// };

// export const getQuestionByIdHandler = async (
//   req: Request,
//   res: Response<BaseResponse<Question | MessageResponse>>
// ) => {
//   try {
//     const { id } = req.params;
//     const question = await getQuestionById(parseInt(id));
//     if (question)
//       res.status(200).send({
//         data: question,
//         success: true,
//       });
//     res
//       .status(404)
//       .send({ data: { message: "Question not found!" }, success: true });
//   } catch (error: any) {
//     res.status(500).send({
//       data: { message: "Something went wrong!" },
//       success: false,
//     });
//   }
// };

// export const getQuestionByTypeHandler = async (
//   req: Request,
//   res: Response<BaseResponse<Question[] | MessageResponse>>
// ) => {
//   try {
//     const { id } = req.params;
//     const questions = await getQuestionByType(parseInt(id));
//     res.status(200).send({
//       data: questions,
//       success: true,
//     });
//   } catch (error: any) {
//     res.status(500).send({
//       data: { message: "Something went wrong!" },
//       success: false,
//     });
//   }
// };
