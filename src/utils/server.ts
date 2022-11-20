import express from "express";
import cookieParser from "cookie-parser";
import { deserializeUser } from "../middlewares/deserializeUser.middleware";
import applicationRoute from "../routes/application.route";
import authRoute from "../routes/auth.route";
import userRoute from "../routes/user.route";
import typeQuestion from "../routes/typeQuestion.route";
import question from "../routes/question.route";
import answerQuestion from "../routes/answerQuestion.route";
import cors from "cors";

export default function createServer() {
  const app = express();
  const whitelists: string[] = process.env.ORIGIN
    ? process.env.ORIGIN.split(",")
    : [""];
  app.use(
    cors({
      origin: (origin, callback) => {
        if (whitelists.indexOf(origin!) !== -1 || !origin) {
          callback(null, origin);
        } else {
          callback(new Error("Origin not allowed"));
        }
      },
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json());
  app.use(deserializeUser);
  app.use("/api", applicationRoute);
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/user", userRoute);
  app.use("/api/v1/typeQuestion", typeQuestion);
  app.use("/api/v1/question", question);
  app.use("/api/v1/asnwerQuestion", answerQuestion);
  return app;
}
