// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";
import { Offspring } from "./item.interface";
// FAMILY MEMBER MODEL
import { FamilyMember } from "./item.interface";
/**
 * In-Memory Store
 */
let offspring: Offspring = {
  name: "child1",
};


// FAMILY ARRAY AND FUNCTION TO FIND FAMILY MEMBER 
const familyTree: FamilyMember[] = [
  {
    name: "san",
    offspring: ["ben", "sam"],
  },
  {
    parent: "san",
    name: "ben",
  },
  {
    parent: "san",
    name: "sam",
  },
];

const findMember = (name: string): FamilyMember | undefined => {
  return familyTree.find((member: FamilyMember) => member.name === name);
};
// TEST BOI
console.log(findMember("sam"));


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

/**
 * Service Methods
 */

export const findAll = async (): Promise<{ offspring: Offspring[] }> => ({
  offspring: [{ name: "child1" }, { name: "child2" }],
});

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
