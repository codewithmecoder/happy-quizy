"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reIssueAccessToken = exports.loginUser = exports.registerUser = void 0;
const client_1 = require("@prisma/client");
const lodash_1 = require("lodash");
const hashPassword_util_1 = require("../utils/hashPassword.util");
const jwt_util_1 = require("../utils/jwt.util");
const prismaClient = new client_1.PrismaClient();
function registerUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const passHash = yield (0, hashPassword_util_1.hashPassword)(user.password);
            user.password = passHash;
            const newUser = yield prismaClient.user.create({ data: user });
            return newUser;
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    const fields = error.meta["target"];
                    throw new Error(`${fields.join(", ")} already exsit!`);
                }
            }
            throw new Error(error.message);
        }
    });
}
exports.registerUser = registerUser;
function loginUser(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield validatePassword({ username, password });
        return user;
    });
}
exports.loginUser = loginUser;
function reIssueAccessToken({ refreshToken, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { decoded } = (0, jwt_util_1.verifyJwt)(refreshToken);
        if (!decoded || !(0, lodash_1.get)(decoded, "id"))
            return false;
        const user = yield prismaClient.user.findFirst({
            where: { id: (0, lodash_1.get)(decoded, "id") },
        });
        if (!user)
            return false;
        const payload = {
            id: user.id,
            displayName: user.displayName,
            username: user.username,
            photo: user.photo,
            isAdmin: user.isAdmin,
        };
        // create an access token
        const accessToken = (0, jwt_util_1.signJwt)(payload, {
            expiresIn: process.env.ACCESSTOKENTIMETOLIVE, // 15m
        });
        return accessToken;
    });
}
exports.reIssueAccessToken = reIssueAccessToken;
function validatePassword({ username, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prismaClient.user.findFirst({ where: { username } });
        if (!user) {
            return false;
        }
        const isValid = yield (0, hashPassword_util_1.comparePassword)(password, user.password);
        if (!isValid) {
            return false;
        }
        return user;
    });
}
//# sourceMappingURL=auth.service.js.map