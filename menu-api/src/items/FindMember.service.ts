// FAMILY MEMBER MODEL
import { FamilyMember } from "./Family.interface";

// FAMILY ARRAY AND FUNCTION TO FIND FAMILY MEMBER
export const familyTree: FamilyMember[] = [
  {
    name: "san",
    offspring: ["ben", "sam", "faith"],
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

export const findMember = (name: string): FamilyMember | undefined => {
  return familyTree.find((member: FamilyMember) => member.name === name);
};

export const getOffspring = (name: string): string[] | undefined => {
  const member = findMember(name);
  if (member && member.offspring) {
    return member.offspring;
  }
  return undefined;
};
