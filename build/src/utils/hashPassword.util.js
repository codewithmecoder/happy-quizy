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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
function hashPassword(password) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const saltWorkFactor = parseInt((_a = process.env.SALTWORKFACTOR) !== null && _a !== void 0 ? _a : "10");
        const salt = yield bcrypt_1.default.genSalt(saltWorkFactor);
        const hash = yield bcrypt_1.default.hashSync(password, salt);
        return hash;
    });
}
exports.hashPassword = hashPassword;
const comparePassword = function (canidatePassword, hashPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcrypt_1.default.compare(canidatePassword, hashPassword).catch((e) => false);
    });
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=hashPassword.util.js.map