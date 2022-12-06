import { Prisma, Score } from "@prisma/client";
import { Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { MessageResponse } from "../DTOS/messageResponse.dto";
import { addScore } from "../services/score.service";

export const addScoreHandler = async (
  req: Request<{}, {}, Prisma.ScoreCreateInput>,
  res: Response<BaseResponse<Score | MessageResponse>>
) => {
  try {
    const data = await addScore(req.body);
    res.status(201).send({ success: true, data });
  } catch (error: any) {
    res
      .status(500)
      .send({ data: { message: "Something went wrong!" }, success: false });
  }
};
