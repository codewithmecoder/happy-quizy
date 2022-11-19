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
exports.logoutHandler = exports.loginUserHandler = exports.registerUserHandler = void 0;
const auth_service_1 = require("../services/auth.service");
const jwt_util_1 = require("../utils/jwt.util");
const user_ex_1 = require("../extensions/user.ex");
const accessTokenCookieOptions = {
    maxAge: 900000,
    httpOnly: true,
    // domain: "localhost",
    path: "/",
    sameSite: "lax",
    secure: true,
};
const refreshTokenCookieOptions = Object.assign(Object.assign({}, accessTokenCookieOptions), { maxAge: 3.154e10 });
function registerUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield (0, auth_service_1.registerUser)(req.body);
            return res.status(201).send({ data: (0, user_ex_1.userToUserDto)(user), success: true });
        }
        catch (e) {
            res.status(409).send({ data: { message: e.message }, success: false });
        }
    });
}
exports.registerUserHandler = registerUserHandler;
function loginUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { password, username } = req.body;
        const _user = yield (0, auth_service_1.loginUser)(username, password);
        if (!_user) {
            return res.status(401).send({
                success: false,
                data: { message: "Invalid username or password" },
            });
        }
        const payload = {
            id: _user.id,
            displayName: _user.displayName,
            username: _user.username,
            photo: _user.photo,
        };
        // create an access token
        const accessToken = (0, jwt_util_1.signJwt)(payload, {
            expiresIn: process.env.ACCESSTOKENTIMETOLIVE, //config.get("accessTokenTtl"), // 15m
        });
        // create a refresh token
        const refreshToken = (0, jwt_util_1.signJwt)(payload, {
            expiresIn: process.env.REFRESHTOKENTIMETOLIVE, // 1y
        });
        // return access & refresh token
        res.cookie("accessToken", accessToken, accessTokenCookieOptions);
        res.cookie("resfreshToken", refreshToken, refreshTokenCookieOptions);
        const userPaylaod = {
            createdAt: _user.createdAt,
            displayName: _user.displayName,
            email: _user.email,
            id: _user.id,
            phoneNumber: _user.phoneNumber,
            photo: _user.photo,
            updatedAt: _user.updatedAt,
            username: _user.username,
            isAdmin: _user.isAdmin,
        };
        res.status(200).send({
            success: true,
            data: {
                user: userPaylaod,
                accessToken,
                refreshToken,
            },
        });
    });
}
exports.loginUserHandler = loginUserHandler;
const logoutHandler = (req, res) => {
    res.clearCookie("accessToken");
    res.clearCookie("resfreshToken");
    res.status(200).send({ data: { message: "User Loged Out!" }, success: true });
};
exports.logoutHandler = logoutHandler;
//# sourceMappingURL=auth.controller.js.map