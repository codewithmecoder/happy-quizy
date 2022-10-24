import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: { message: "this is route for getting all the users" },
  });
});

export default router;
