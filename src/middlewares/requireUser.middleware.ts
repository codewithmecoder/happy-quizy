import { NextFunction, Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";

export const requireUser = (
  req: Request,
  res: Response<BaseResponse<{ message: string }>>,
  next: NextFunction
) => {
  const user = res.locals.user;
  if (!user) {
    return res.json({
      success: false,
      data: { message: "please login to access this action!" },
    });
  }

  return next();
};
