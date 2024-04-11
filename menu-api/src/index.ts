/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
// import express from "express";
import { huiFamily, firstborn } from "./items/Family.tree";
import cors from "cors";
import helmet from "helmet";
import express, { Request, Response } from "express";
import { Offspring } from "./items/Family.interface";
import { findMember } from "./items/FindMember.service";
import { getOffspring } from "./items/FindMember.service";

// TEST BOI
console.log(findMember("san"));
console.log(getOffspring("san"));
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

// const offspringRouter = express.Router();
// offspringRouter.get("/", async (req: Request, res: Response) => {
//   try {
//     res.status(200).send({
//       offspring: [{ name: "child1" }, { name: "child2" }],
//     });
//   } catch (e: any) {
//     res.status(500).send(e.message);
//   }
// });
// app.use("/MemberOffspring", offspringRouter);

const familyRouter = express.Router();
familyRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send([{ message: "does not exist" }]);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
app.use("/familyMemberExists", familyRouter);

//THIS IS BENS STUFF
const familyBenRouter = express.Router();
familyBenRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ huiFamily });
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
app.use("/family", familyBenRouter);

const oldBoyRouter = express.Router();
oldBoyRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ firstborn });
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
app.use("/family/firstborn", oldBoyRouter);
//THIS IS THE END OF BENS STUFF

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
