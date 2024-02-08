// FAMILY MEMBER MODEL
import { FamilyMember } from "./Family.interface";

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
