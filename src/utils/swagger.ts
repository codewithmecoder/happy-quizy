import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";
import log from "./logger";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Happy Quizy API Docs",
      description: "Happy Quizy Application API",
      version,
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

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: string) {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  log.info(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
