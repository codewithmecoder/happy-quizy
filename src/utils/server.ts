import cors from "cors";
import express from "express";
import applicationRoute from "../routes/application.route";
import authRoute from "../routes/auth.route";
import userRoute from "../routes/user.route";

export default function createServer() {
  const app = express();
  app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    })
  );
  app.use(express.json());
  app.use("/", applicationRoute);
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/user", userRoute);
  return app;
}
