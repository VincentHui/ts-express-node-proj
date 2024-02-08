export interface BaseItem {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Item extends BaseItem {
  id: number;
}

export interface Offspring {
  name: string;
}
// FAMILY MEMEBER MODEL 
export interface FamilyMember {
  name: string;
  parent?: string;
  offspring?: string[];
}