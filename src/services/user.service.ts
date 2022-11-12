import { PrismaClient } from "@prisma/client";
import { UserDto } from "../DTOS/users/user.dto";
import { userToUserDto } from "../extensions/user.ex";
import { UpdateUserInputModel } from "../swagger/schemas/user.schema";

const prismaClient = new PrismaClient();
export async function getFullUserByUsername(
  username: string
): Promise<UserDto | null> {
  const user = await prismaClient.user.findFirst({ where: { username } });
  return userToUserDto(user);
}

export async function getUsers(): Promise<UserDto[] | null> {
  const users = await prismaClient.user.findMany({});
  return users.map((user) => userToUserDto(user)!);
}

export async function getFullUserById(id: number): Promise<UserDto | null> {
  const user = await prismaClient.user.findFirst({ where: { id } });
  return userToUserDto(user);
}

export async function updateUser(
  id: number,
  {
    displayName,
    email,
    isAdmin,
    phoneNumber,
    photo,
    username,
  }: UpdateUserInputModel,
  user: UserDto
): Promise<UserDto | null> {
  const updatedUser = await prismaClient.user.update({
    where: { id },
    data: {
      ...user,
      displayName,
      email,
      isAdmin,
      phoneNumber,
      photo,
      username,
      updatedAt: new Date(Date.now()),
    },
  });
  return userToUserDto(updatedUser);
}
