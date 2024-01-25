/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import * as FamilyService from "./items.service";
import { BaseItem, BaseFamily, Item, FamilyItem } from "./item.interface";
/**
 * Router Definition
 */
export const itemsRouter = express.Router();
export const FamilyRouter = express.Router();
/**
 * Controller Definitions
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Item = await ItemService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;

    const newItem = await ItemService.create(item);

    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
// PUT items/:id

itemsRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: Item = req.body;

    const existingItem: Item = await ItemService.find(id);

    if (existingItem) {
      const updatedItem = await ItemService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ItemService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await ItemService.remove(id);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

FamilyRouter.get("/", async (req: Request, res: Response) => {
  try {
    const famitems: FamilyItem[] = await FamilyService.findAll2();

    res.status(200).send(famitems);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
// GET items/:id

FamilyRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const Fam: FamilyItem = await FamilyService.find2(id);

    if (Fam) {
      return res.status(200).send(Fam);
    }

    res.status(404).send("fam not found");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST items

FamilyRouter.post("/", async (req: Request, res: Response) => {
  try {
    const Fam: BaseFamily = req.body;

    const newFam = await FamilyService.create2(Fam);

    res.status(201).json(newFam);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
// PUT items/:id

FamilyRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const famUpdate: FamilyItem = req.body;

    const existingItem: FamilyItem = await FamilyService.find2(id);

    if (existingItem) {
      const updatedItem = await FamilyService.update2(id, famUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await FamilyService.create2(famUpdate);

    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id

FamilyRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await FamilyService.remove(id);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
