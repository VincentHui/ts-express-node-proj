/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
/**
 * Router Definition
 */
export const familyRouter = express.Router();

familyRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send([{ message: "does not exist" }]);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
