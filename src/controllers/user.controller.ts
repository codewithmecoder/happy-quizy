import { Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";

export async function getCurrentUserHandler(
  req: Request,
  res: Response<BaseResponse<object>>
) {
  return res.status(200).json({ success: true, data: res.locals.user });
}

export async function getFullCurrentUser(req: Request, res: Response) {
  return res.send(res.locals.user);
}
