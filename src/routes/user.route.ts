import express, { Request, Response } from "express";
import { getCurrentUserHandler } from "../controllers/user.controller";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

router.get("/", requireUser, getCurrentUserHandler);

export default router;
