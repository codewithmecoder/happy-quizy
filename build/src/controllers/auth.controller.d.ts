import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { UserloginDto } from "../DTOS/users/userLogin.dto";
import { LoginReturn, UserDto } from "../DTOS/users/user.dto";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { MessageResponse } from "../DTOS/messageResponse.dto";
export declare function registerUserHandler(req: Request<{}, {}, Prisma.UserCreateInput>, res: Response<BaseResponse<UserDto | MessageResponse>>): Promise<Response<BaseResponse<UserDto | MessageResponse>, Record<string, any>> | undefined>;
export declare function loginUserHandler(req: Request<{}, {}, UserloginDto>, res: Response<BaseResponse<LoginReturn | MessageResponse>>): Promise<Response<BaseResponse<LoginReturn | MessageResponse>, Record<string, any>> | undefined>;
export declare const logoutHandler: (req: Request, res: Response<BaseResponse<MessageResponse>>) => void;
