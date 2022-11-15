import { UserDto } from "../DTOS/users/user.dto";
import { UpdateUserInputModel } from "../swagger/schemas/user.schema";
export declare function getFullUserByUsername(username: string): Promise<UserDto | null>;
export declare function getUsers(): Promise<UserDto[] | null>;
export declare function getFullUserById(id: number): Promise<UserDto | null>;
export declare function updateUser(id: number, { displayName, email, isAdmin, phoneNumber, photo, username, }: UpdateUserInputModel, user: UserDto): Promise<UserDto | null>;
