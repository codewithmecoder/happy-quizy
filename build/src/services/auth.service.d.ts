import { Prisma } from "@prisma/client";
export declare function registerUser(user: Prisma.UserCreateInput): Promise<import(".prisma/client").User>;
export declare function loginUser(username: string, password: string): Promise<false | import(".prisma/client").User>;
export declare function reIssueAccessToken({ refreshToken, }: {
    refreshToken: string;
}): Promise<string | false>;
