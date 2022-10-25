import { NextFunction, Request, Response } from "express";
import log from "../utils/logger";

export const requireUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user;
  log.info(res);
  if (!user) {
    return res.sendStatus(403);
  }

  return next();
};
