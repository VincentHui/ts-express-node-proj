import { Offspring } from "./Family.interface";

let offspring: Offspring = {
  name: "child1",
};

export const findAll = async (): Promise<{ offspring: Offspring[] }> => ({
  offspring: [{ name: "child1" }, { name: "child2" }],
});
