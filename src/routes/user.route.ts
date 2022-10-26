import express, { Request, Response } from "express";
import {
  getCurrentUserHandler,
  getFullUserHandler,
} from "../controllers/user.controller";
import { requireUser } from "../middlewares/requireUser.middleware";

const router = express.Router();

router.get("/", requireUser, getCurrentUserHandler);
router.get("/getFullUser", requireUser, getFullUserHandler);

export default router;
