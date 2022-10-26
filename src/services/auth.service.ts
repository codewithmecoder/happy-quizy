import { Prisma, PrismaClient } from "@prisma/client";
import { get } from "lodash";
import { comparePassword, hashPassword } from "../utils/hashPassword.util";
import { signJwt, verifyJwt } from "../utils/jwt.util";
import log from "../utils/logger";

const prismaClient = new PrismaClient();

export async function registerUser(user: Prisma.UserCreateInput) {
  try {
    const passHash = await hashPassword(user.password);
    user.password = passHash;
    const newUser = await prismaClient.user.create({ data: user });
    return newUser;
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const fields = error.meta!["target"] as [];
        throw new Error(`${fields.join(", ")} already exsit!`);
      }
    }
    throw new Error(error.message);
  }
}

export async function loginUser(username: string, password: string) {
  const user = await validatePassword({ username, password });
  return user;
}

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  const { decoded } = verifyJwt(refreshToken);
  log.info(decoded);
  if (!decoded || !get(decoded, "id")) return false;

  const user = await prismaClient.user.findFirst({
    where: { id: get(decoded, "id") },
  });
  if (!user) return false;
  const payload = {
    id: user.id,
    displayName: user.displayName,
    username: user.username,
    photo: user.photo,
    isAdmin: user.isAdmin,
  };
  // create an access token
  const accessToken = signJwt(payload, {
    expiresIn: process.env.ACCESSTOKENTIMETOLIVE, // 15m
  });
  return accessToken;
}

async function validatePassword({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const user = await prismaClient.user.findFirst({ where: { username } });
  if (!user) {
    return false;
  }

  const isValid = await comparePassword(password, user.password);

  if (!isValid) {
    return false;
  }
  return user;
}
