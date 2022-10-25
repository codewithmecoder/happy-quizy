import express, { Request, Response } from "express";
import {
  loginUserHandler,
  registerUserHandler,
} from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", registerUserHandler);
router.post("/login", loginUserHandler);
export default router;
