// src/items/items.interface.ts

import { Item, FamilyItem, BaseFamily } from "./item.interface";

export interface Items {
  [key: number]: Item;
}

export interface FamilyItems {
  [key: number]: FamilyItem;
}
