export interface BaseItem {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Item extends BaseItem {
  id: number;
}

export interface BaseFamily {
  name: string;
}

export interface FamilyItem extends BaseFamily {
  id: number;
}
