/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
// import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
import { familyRouter } from "./items/items.router";
import express, { Request, Response } from "express";
import { Offspring } from "./items/item.interface";

dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}
console.log("exit");
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);
app.use("/familyMemberExists", familyRouter);

const offspringRouter = express.Router();
offspringRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send({
      offspring: [{ name: "child1" }, { name: "child2" }],
    });
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
app.use("/MemberOffspring", offspringRouter);
/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
