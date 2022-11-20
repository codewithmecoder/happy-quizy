import { Request, Response } from "express";
import { get } from "lodash";
import { reIssueAccessToken } from "../services/auth.service";
import { verifyJwt } from "./jwt.util";

export const validateUser = async (req: Request, res: Response) => {
  const accessToken =
    get(req, "headers.authorization", "").replace(/^Bearer\s/, "") ||
    get(req, "cookies.accessToken");
  const refreshToken =
    get(req, "headers.x-refresh") || get(req, "cookies.refreshToken");
  if (accessToken) {
    const { decoded, expired } = verifyJwt(accessToken);
    if (!expired && decoded) {
      res.locals.user = decoded;
      return decoded;
    }
  }
  const { expired } = verifyJwt(refreshToken);
  if (!expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);
      res.cookie("accessToken", newAccessToken, {
        maxAge: 900000, //15 mins
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
      });
    }
    const result = verifyJwt(newAccessToken as string);
    res.locals.user = result.decoded;
    return result.decoded;
  }
  return null;
};
