import { NextFunction, Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
export declare const requireUser: (req: Request, res: Response<BaseResponse<{
    message: string;
}>>, next: NextFunction) => void | Response<BaseResponse<{
    message: string;
}>, Record<string, any>>;
