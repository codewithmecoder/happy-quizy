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
exports.updateUser = exports.getFullUserById = exports.getUsers = exports.getFullUserByUsername = void 0;
const client_1 = require("@prisma/client");
const user_ex_1 = require("../extensions/user.ex");
const prismaClient = new client_1.PrismaClient();
function getFullUserByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prismaClient.user.findFirst({ where: { username } });
        return (0, user_ex_1.userToUserDto)(user);
    });
}
exports.getFullUserByUsername = getFullUserByUsername;
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prismaClient.user.findMany({});
        return users.map((user) => (0, user_ex_1.userToUserDto)(user));
    });
}
exports.getUsers = getUsers;
function getFullUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prismaClient.user.findFirst({ where: { id } });
        return (0, user_ex_1.userToUserDto)(user);
    });
}
exports.getFullUserById = getFullUserById;
function updateUser(id, { displayName, email, isAdmin, phoneNumber, photo, username, }, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedUser = yield prismaClient.user.update({
            where: { id },
            data: Object.assign(Object.assign({}, user), { displayName,
                email,
                isAdmin,
                phoneNumber,
                photo,
                username, updatedAt: new Date(Date.now()) }),
        });
        return (0, user_ex_1.userToUserDto)(updatedUser);
    });
}
exports.updateUser = updateUser;
//# sourceMappingURL=user.service.js.map