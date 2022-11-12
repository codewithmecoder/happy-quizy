import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { MessageResponse } from "../DTOS/messageResponse.dto";
import { UserDto } from "../DTOS/users/user.dto";
import {
  getFullUserById,
  getFullUserByUsername,
  getUsers,
  updateUser,
} from "../services/user.service";
import {
  CurrentUserLogin,
  UpdateAnyUserInputModel,
  UpdateUserInputModel,
} from "../swagger/schemas/user.schema";

export async function getCurrentUserHandler(
  req: Request,
  res: Response<BaseResponse<CurrentUserLogin | MessageResponse>>
) {
  return res
    .status(200)
    .json({ success: true, data: res.locals.user as CurrentUserLogin });
}

export const getUsersHandler = async (
  req: Request,
  res: Response<BaseResponse<UserDto[] | MessageResponse>>
) => {
  const users = await getUsers();
  return res.json({ success: true, data: users! });
};

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

export async function updateUserHandler(
  req: Request<{}, {}, UpdateUserInputModel>,
  res: Response<BaseResponse<UserDto | MessageResponse>>
) {
  const { username, id } = res.locals.user;
  const user = await getFullUserByUsername(username);
  if (!user) {
    return res.json({ success: false, data: { message: "User not found" } });
  }
  const updatedUser = await updateUser(id, req.body, user);
  return res.json({ success: true, data: updatedUser! });
}

export async function updateAnyUserHandler(
  req: Request<{}, {}, UpdateAnyUserInputModel>,
  res: Response<BaseResponse<UserDto | MessageResponse>>
) {
  const user = await getFullUserById(req.body.id);
  if (!user) {
    return res.json({ success: false, data: { message: "User not found" } });
  }
  const updatedUser = await updateUser(req.body.id, req.body, user);
  return res.json({ success: true, data: updatedUser! });
}
