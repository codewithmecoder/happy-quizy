import { NextFunction, Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";

export const requireAdmin = (
  req: Request,
  res: Response<BaseResponse<{ message: string }>>,
  next: NextFunction
) => {
  const user = res.locals.user;
  console.log(user);
  if (!user || !user.isAdmin) {
    return res.json({
      success: false,
      data: { message: "Admin access only!" },
    });
  }

  return next();
};
