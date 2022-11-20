/// <reference types="node" />
export interface UserDto {
    id: number;
    username: string;
    displayName: string | null;
    email: string;
    phoneNumber: string | null;
    photo: Buffer | null;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export type LoginReturn = {
    user: UserDto;
    accessToken: string;
    refreshToken: string;
};
