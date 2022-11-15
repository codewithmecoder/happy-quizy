import { NextFunction, Request, Response } from "express";
export declare const deserializeUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
