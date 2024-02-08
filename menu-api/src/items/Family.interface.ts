export interface Offspring {
  name: string;
}

export interface BaseFamily {
  name: string;
}

export interface FamilyItem extends BaseFamily {
  id: number;
}

// FAMILY MEMEBER MODEL
export interface FamilyMember {
  name: string;
  parent?: string;
  offspring?: string[];
}
