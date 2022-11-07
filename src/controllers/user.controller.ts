import { Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { MessageResponse } from "../DTOS/messageResponse.dto";
import { UserDto } from "../DTOS/users/user.dto";
import { getFullUserByUsername } from "../services/user.service";
import { CurrentUserLogin } from "../swagger/schemas/user.schema";

export async function getCurrentUserHandler(
  req: Request,
  res: Response<BaseResponse<CurrentUserLogin | MessageResponse>>
) {
  return res
    .status(200)
    .json({ success: true, data: res.locals.user as CurrentUserLogin });
}

export async function getFullCurrentUser(req: Request, res: Response) {
  return res.send(res.locals.user);
}

export async function getFullUserHandler(
  req: Request,
  res: Response<BaseResponse<UserDto | MessageResponse>>
) {
  const { username } = res.locals.user;
  const user = await getFullUserByUsername(username);
  if (!user) {
    return res.json({ success: false, data: { message: "User not found" } });
  }
  return res.json({ success: true, data: user });
}
