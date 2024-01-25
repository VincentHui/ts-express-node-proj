// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { BaseItem, Item, BaseFamily, FamilyItem } from "./item.interface";
import { Items, FamilyItems } from "./items.interface";
/**
 * In-Memory Store
 */
let items: Items = {
  1: {
    id: 1,
    name: "Burger",
    price: 599,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
  },
  2: {
    id: 2,
    name: "Pizza",
    price: 299,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
  },
  3: {
    id: 3,
    name: "Tea",
    price: 199,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
  },
};

let Family: FamilyItems = {
  1: {
    id: 1,
    name: "femaleParentalUnit",
  },
  2: {
    id: 2,
    name: "maleParentalUnit",
  },
  3: {
    id: 3,
    name: "offspringunit1",
  },
};
/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);
export const findAll2 = async (): Promise<FamilyItem[]> =>
  Object.values(Family);
export const find2 = async (id: number): Promise<FamilyItem> => Family[id];
export const find = async (id: number): Promise<Item> => items[id];
export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};
export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};
export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
export const create2 = async (newFam: BaseFamily): Promise<FamilyItem> => {
  const id = new Date().valueOf();

  Family[id] = {
    id,
    ...newFam,
  };

  return Family[id];
};
export const update2 = async (
  id: number,
  itemUpdate: BaseFamily
): Promise<FamilyItem | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  Family[id] = { id, ...itemUpdate };

  return Family[id];
};
