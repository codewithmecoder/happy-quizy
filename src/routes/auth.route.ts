import express, { Request, Response } from "express";
import {
  loginUserHandler,
  registerUserHandler,
} from "../controllers/auth.controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: { message: "this route for authentication" },
  });
});

router.post("/register", registerUserHandler);
router.post("/login", loginUserHandler);
export default router;
