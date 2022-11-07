import { NextFunction, Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import log from "../utils/logger";

export const requireUser = (
  req: Request,
  res: Response<BaseResponse<{ message: string }>>,
  next: NextFunction
) => {
  const user = res.locals.user;
  console.log(res.locals);
  if (!user) {
    return res.json({
      success: false,
      data: { message: "please login to access this action!" },
    });
  }

  return next();
};
