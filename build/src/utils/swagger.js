"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const package_json_1 = require("../../package.json");
const logger_1 = __importDefault(require("./logger"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Happy Quizy API Docs",
            description: "Happy Quizy Application API",
            version: package_json_1.version,
            license: {
                name: "MIT",
                url: "https://opensource.org/licenses/MIT",
            },
        },
        components: {
            securitySchemes: {
                accessToken: {
                    description: "JWT Authorization",
                    type: "http",
                    scheme: "bearer",
                    in: "header",
                    name: "authorization",
                    bearerFormat: "JWT",
                },
                refreshToken: {
                    description: "JWT Authorization Refresh Token",
                    type: "apiKey",
                    in: "header",
                    name: "x-refresh",
                    bearerFormat: "JWT",
                    scheme: "apiKey",
                },
            },
        },
        security: [
            {
                accessToken: [],
                refreshToken: [],
            },
        ],
    },
    apis: ["./src/routes/**.ts", "./src/swagger/schemas/*ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function swaggerDocs(app, port) {
    // Swagger page
    app.use("/api/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    // Docs in JSON format
    app.get("/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    logger_1.default.info(`Docs available at http://localhost:${port}/docs`);
}
exports.default = swaggerDocs;
//# sourceMappingURL=swagger.js.map