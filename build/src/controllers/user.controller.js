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
exports.updateAnyUserHandler = exports.updateUserHandler = exports.getFullUserHandler = exports.getFullCurrentUser = exports.getUsersHandler = exports.getCurrentUserHandler = void 0;
const user_service_1 = require("../services/user.service");
function getCurrentUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res
            .status(200)
            .json({ success: true, data: res.locals.user });
    });
}
exports.getCurrentUserHandler = getCurrentUserHandler;
const getUsersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_service_1.getUsers)();
    return res.json({ success: true, data: users });
});
exports.getUsersHandler = getUsersHandler;
function getFullCurrentUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.send(res.locals.user);
    });
}
exports.getFullCurrentUser = getFullCurrentUser;
function getFullUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username } = res.locals.user;
        const user = yield (0, user_service_1.getFullUserByUsername)(username);
        if (!user) {
            return res.json({ success: false, data: { message: "User not found" } });
        }
        return res.json({ success: true, data: user });
    });
}
exports.getFullUserHandler = getFullUserHandler;
function updateUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, id } = res.locals.user;
        const user = yield (0, user_service_1.getFullUserByUsername)(username);
        if (!user) {
            return res.json({ success: false, data: { message: "User not found" } });
        }
        const updatedUser = yield (0, user_service_1.updateUser)(id, req.body, user);
        return res.json({ success: true, data: updatedUser });
    });
}
exports.updateUserHandler = updateUserHandler;
function updateAnyUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield (0, user_service_1.getFullUserById)(req.body.id);
        if (!user) {
            return res.json({ success: false, data: { message: "User not found" } });
        }
        const updatedUser = yield (0, user_service_1.updateUser)(req.body.id, req.body, user);
        return res.json({ success: true, data: updatedUser });
    });
}
exports.updateAnyUserHandler = updateAnyUserHandler;
//# sourceMappingURL=user.controller.js.map