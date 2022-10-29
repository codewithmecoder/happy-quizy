import { PrismaClient } from "@prisma/client";
import { UserDto } from "../DTOS/users/user.dto";
import { userToUserDto } from "../extensions/user.ex";

const prismaClient = new PrismaClient();
export async function getFullUserByUsername(
  username: string
): Promise<UserDto | null> {
  const user = await prismaClient.user.findFirst({ where: { username } });
  return userToUserDto(user);
}
