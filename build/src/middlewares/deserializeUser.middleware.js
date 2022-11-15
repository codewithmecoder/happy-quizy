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
exports.deserializeUser = void 0;
const lodash_1 = require("lodash");
const auth_service_1 = require("../services/auth.service");
const jwt_util_1 = require("../utils/jwt.util");
const deserializeUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = (0, lodash_1.get)(req, "cookies.accessToken") ||
        (0, lodash_1.get)(req, "headers.authorization", "").replace(/^Bearer\s/, "");
    const refreshToken = (0, lodash_1.get)(req, "cookies.resfreshToken") || (0, lodash_1.get)(req, "headers.x-refresh");
    if (accessToken) {
        const { decoded, expired } = (0, jwt_util_1.verifyJwt)(accessToken);
        if (expired && decoded) {
            res.locals.user = decoded;
            return next();
        }
    }
    const { expired } = (0, jwt_util_1.verifyJwt)(refreshToken);
    if (!expired && refreshToken) {
        const newAccessToken = yield (0, auth_service_1.reIssueAccessToken)({ refreshToken });
        if (newAccessToken) {
            res.setHeader("x-access-token", newAccessToken);
            res.cookie("accessToken", newAccessToken, {
                maxAge: 900000,
                httpOnly: true,
                domain: "localhost",
                path: "/",
                sameSite: "strict",
                secure: false,
            });
        }
        const result = (0, jwt_util_1.verifyJwt)(newAccessToken);
        res.locals.user = result.decoded;
    }
    return next();
});
exports.deserializeUser = deserializeUser;
//# sourceMappingURL=deserializeUser.middleware.js.map