import cors from "cors";
import { NextFunction, Request, Response } from "express";
export const corsMiddleware = async (origin: any, callback: any) => {
  const whitelist = process.env.ORIGIN ? process.env.ORIGIN.split(",") : [""];
      if (whitelist.indexOf(origin!) !== -1) {
        callback(null, true);
      } else {
        res
          .status(500)
          .send({ success: false, data: { message: "CORS not allowed!" } });
      }
  };
  return next();
};
