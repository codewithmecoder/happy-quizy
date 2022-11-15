import { User } from "@prisma/client";
import { UserDto } from "../DTOS/users/user.dto";
export declare function userToUserDto(user: User | null): UserDto | null;
