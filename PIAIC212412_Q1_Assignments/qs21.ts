/*
They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.
*/

interface personalData {
  name: string;
  age: number;
  address: any;
  qualification: any;
}
const student1: personalData = {
  name: "Abdullah",
  age: 37,
  address: "Lahore",
  qualification: "MS Engineering",
};
console.log(student1);
