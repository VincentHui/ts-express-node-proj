import { FamilyMember } from "./Family.interface";

export const familyTree: FamilyMember[] = [
  { name: "Betty Hui (Shen)", DOB: "01/17/ I HAVE NO IDEA", sibling: '',parent: [''], offspring:[],family: 'a'},
  { name: "San Hui", DOB: "03/28/ I HAVE NO IDEA", sibling: '',parent: [''], offspring:[],family: 'a' },
  { name: "Samuel Hui", DOB: "04/12/1994", sibling: "1",parent: ['Betty Hui (Shen)','San Hui' ], offspring:[],family: 'a' },
  { name: "Benjamin Hui", DOB: "8/03/1998", sibling: "2",parent: ['Betty Hui (Shen)','San Hui'], offspring:[],family: 'a' },
  { name: "Faith Hui", DOB: "05/07/2003", sibling: "3",parent: ['Betty Hui (Shen)','San Hui'], offspring:[],family: 'a' },
  { name: "Bethany Hui", DOB: "08/26/2008", sibling: "4",parent: ['Betty Hui (Shen)','San Hui'], offspring:[],family: 'a' },
  { name: "Pearl Hui", DOB: "01/18/2010", sibling: "5",parent: ['Betty Hui (Shen)','San Hui'], offspring:[],family: 'a' },
  { name: "Ruth (Cici) Hui", DOB: "08/06/2011", sibling:"6",parent: ['Betty Hui (Shen)','San Hui'], offspring:[],family: 'a' },
  { name: "Pak Hui (Wu)", DOB: "I HAVE NO IDEA",parent: [''], offspring:[],family: 'b' },
  { name: "Dominic Hui", DOB: "I HAVE NO IDEA",parent: [''], offspring:[],family: 'b' },
  { name: "Vincent Hui", DOB: "06/15/1992", sibling: "1",parent: ['Pak Hui (Wu)','Dominic Hui'], offspring:[],family: 'b' },
  { name: "Callum Hui", DOB: "12/22/1999", sibling: "2",parent: ['Pak Hui (Wu)','Dominic Hui'], offspring:[],family: 'b' },
]


export const findMember = (name: string): FamilyMember | undefined => {
  return familyTree.find((member: FamilyMember) => member.name === name);
};

console.log(findMember('Callum Hui'))

export const huiFamilyOne = [
  { name: "Betty Hui (Shen)", DOB: "01/17/ I HAVE NO IDEA" },
  { name: "San Hui", DOB: "03/28/ I HAVE NO IDEA" },
  { name: "Samuel Hui", DOB: "04/12/1994", Sibling: "1" },
  { name: "Benjamin Hui", DOB: "8/03/1998", Sibling: "2" },
  { name: "Faith Hui", DOB: "05/07/2003", Sibling: "3" },
  { name: "Bethany Hui", DOB: "08/26/2008", Sibling: "4" },
  { name: "Pearl Hui", DOB: "01/18/2010", Sibling: "5" },
  { name: "Ruth (Cici) Hui", DOB: "08/06/2011", Sibling: "6" },
];

export const huiFamilyTwo = [
  { name: "Pak Hui (Wu)", DOB: "I HAVE NO IDEA",parent: [''], offspring:[],family: 'b' },
  { name: "Dominic Hui", DOB: "I HAVE NO IDEA",parent: [''], offspring:[],family: 'b' },
  { name: "Vincent Hui", DOB: "06/15/1992", sibling: "1",parent: [''], offspring:[],family: 'b' },
  { name: "Callum Hui", DOB: "12/22/1999", sibling: "2",parent: [''], offspring:[],family: 'b' },
];

export const oldBoy1 = huiFamilyOne.filter((member) => member.Sibling === "1");
export const oldBoy2 = huiFamilyTwo.filter((member) => member.sibling === "1");
