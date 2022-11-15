"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const deserializeUser_middleware_1 = require("../middlewares/deserializeUser.middleware");
const application_route_1 = __importDefault(require("../routes/application.route"));
const auth_route_1 = __importDefault(require("../routes/auth.route"));
const user_route_1 = __importDefault(require("../routes/user.route"));
const typeQuestion_route_1 = __importDefault(require("../routes/typeQuestion.route"));
const question_route_1 = __importDefault(require("../routes/question.route"));
const answerQuestion_route_1 = __importDefault(require("../routes/answerQuestion.route"));
function createServer() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: process.env.ORIGIN,
        credentials: true,
    }));
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json());
    app.use(deserializeUser_middleware_1.deserializeUser);
    app.use("/", application_route_1.default);
    app.use("/api/v1/auth", auth_route_1.default);
    app.use("/api/v1/user", user_route_1.default);
    app.use("/api/v1/typeQuestion", typeQuestion_route_1.default);
    app.use("/api/v1/question", question_route_1.default);
    app.use("/api/v1/asnwerQuestion", answerQuestion_route_1.default);
    return app;
}
exports.default = createServer;
//# sourceMappingURL=server.js.map