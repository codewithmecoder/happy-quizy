"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const security_1 = require("./security");
const privateKey = (_a = security_1.SecurityKey.PRIVATEKEY) !== null && _a !== void 0 ? _a : "privateKey";
const publicKey = (_b = security_1.SecurityKey.PUBLICKEY) !== null && _b !== void 0 ? _b : "publicKey";
function signJwt(object, option) {
    return jsonwebtoken_1.default.sign(object, privateKey, Object.assign(Object.assign({}, (option && option)), { algorithm: "RS256" }));
}
exports.signJwt = signJwt;
function verifyJwt(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, publicKey);
        return {
            valid: true,
            expired: false,
            decoded,
        };
    }
    catch (error) {
        return {
            valid: false,
            expired: error.message === "jwt expire",
            decoded: null,
        };
    }
}
exports.verifyJwt = verifyJwt;
//# sourceMappingURL=jwt.util.js.map