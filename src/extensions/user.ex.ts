import { User } from "@prisma/client";
import { UserDto } from "../DTOS/users/user.dto";

export function userToUserDto(user: User | null): UserDto | null {
  if (!user) return null;
  return {
    createdAt: user.createdAt,
    displayName: user.displayName,
    email: user.email,
    id: user.id,
    phoneNumber: user.phoneNumber,
    photo: user.photo,
    updatedAt: user.updatedAt,
    username: user.username,
  } as UserDto;
}
