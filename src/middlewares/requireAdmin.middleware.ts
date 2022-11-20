import { NextFunction, Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { validateUser } from "../utils/validateUser.util";

export const requireAdmin = (
  req: Request,
  res: Response<BaseResponse<{ message: string }>>,
  next: NextFunction
) => {
  const user: any = validateUser(req, res);
  console.log("admin res => ", user);
  if (!user || !user.isAdmin) {
    return res.json({
      success: false,
      data: { message: "Admin access only!" },
    });
  }

  return next();
};
