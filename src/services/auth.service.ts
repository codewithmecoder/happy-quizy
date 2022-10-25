import { Prisma, PrismaClient } from "@prisma/client";
import { comparePassword, hashPassword } from "../utils/hashPassword.util";
import { signJwt, verifyJwt } from "../utils/jwt.util";

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
        throw new Error("username already exsit!");
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
  // if (!decoded || !get(decoded, "session")) return false;

  // const session = await SessionModel.findById(get(decoded, "session"));
  // if (!session || !session.valid) return false;
  // const user = await findUser({ _id: session.user });

  // if (!user) return false;
  // // create an access token
  // const accessToken = signJwt(
  //   {
  //     ...user,
  //     session: session._id,
  //   },
  //   {
  //     expiresIn: config.get("accessTokenTtl"), // 15m
  //   }
  // );
  // return accessToken;
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
