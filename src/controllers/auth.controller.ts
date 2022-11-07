import { CookieOptions, Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.service";
import { signJwt } from "../utils/jwt.util";
import { Prisma } from "@prisma/client";
import { UserloginDto } from "../DTOS/users/userLogin.dto";
import { LoginReturn, UserDto } from "../DTOS/users/user.dto";
import { BaseResponse } from "../DTOS/baseResponse.dto";
import { userToUserDto } from "../extensions/user.ex";
import { MessageResponse } from "../DTOS/messageResponse.dto";

const accessTokenCookieOptions: CookieOptions = {
  maxAge: 900000, //15 mins
  httpOnly: true,
  domain: "localhost",
  path: "/",
  sameSite: "lax",
  secure: false,
};
const refreshTokenCookieOptions: CookieOptions = {
  ...accessTokenCookieOptions,
  maxAge: 3.154e10, //1 year
};

export async function registerUserHandler(
  req: Request<{}, {}, Prisma.UserCreateInput>,
  res: Response<BaseResponse<UserDto | MessageResponse>>
) {
  try {
    const user = await registerUser(req.body);
    return res.status(201).send({ data: userToUserDto(user)!, success: true });
  } catch (e: any) {
    res.status(409).send({ data: { message: e.message }, success: false });
  }
}

export async function loginUserHandler(
  req: Request<{}, {}, UserloginDto>,
  res: Response<BaseResponse<LoginReturn | MessageResponse>>
) {
  const { password, username } = req.body;
  const _user = await loginUser(username, password);
  if (!_user) {
    return res
      .status(401)
      .send({ success: false, data: { message: "Invalid email or password" } });
  }
  const payload = {
    id: _user.id,
    displayName: _user.displayName,
    username: _user.username,
    photo: _user.photo,
  };
  // create an access token
  const accessToken = signJwt(payload, {
    expiresIn: process.env.ACCESSTOKENTIMETOLIVE, //config.get("accessTokenTtl"), // 15m
  });
  // create a refresh token

  const refreshToken = signJwt(payload, {
    expiresIn: process.env.REFRESHTOKENTIMETOLIVE, // 1y
  });

  // return access & refresh token
  res.cookie("accessToken", accessToken, accessTokenCookieOptions);
  res.cookie("resfreshToken", refreshToken, refreshTokenCookieOptions);
  const userPaylaod = {
    createdAt: _user.createdAt,
    displayName: _user.displayName,
    email: _user.email,
    id: _user.id,
    phoneNumber: _user.phoneNumber,
    photo: _user.photo,
    updatedAt: _user.updatedAt,
    username: _user.username,
    isAdmin: _user.isAdmin,
  } as UserDto;
  res.status(200).send({
    success: true,
    data: {
      user: userPaylaod,
      accessToken,
      refreshToken,
    },
  });
}
