import { NextFunction, Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { validateUser } from "../utils/validateUser.util";

export const requireAdmin = async (
  req: Request,
  res: Response<BaseResponse<{ message: string }>>,
  next: NextFunction
) => {
  // const user: any = await validateUser(req, res);
  // console.log("admin res => ", user);
  const user = res.locals.user;
  console.log("user admin", user);
  if (!user || !user.isAdmin) {
    return res.json({
      success: false,
      data: { message: "Admin access only!" },
    });
  }

  return next();
};
