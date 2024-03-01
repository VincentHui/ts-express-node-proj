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
  { name: "Pak Hui (Wu)", DOB: "I HAVE NO IDEA" },
  { name: "Dominic Hui", DOB: "I HAVE NO IDEA" },
  { name: "Vincent Hui", DOB: "06/15/1992", Sibling: "1" },
  { name: "Callum Hui", DOB: "12/22/1999", Sibling: "2" },
];

export const oldBoy1 = huiFamilyOne.filter((member) => member.Sibling === "1");
export const oldBoy2 = huiFamilyTwo.filter((member) => member.Sibling === "1");
