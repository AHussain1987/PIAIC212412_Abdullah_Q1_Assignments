/*
More Conditional Tests: 
You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

let str1: string = "Hello";
let str2: string = "Hello";
console.log("String 1 is " + str1);
console.log("String 2 is " + str2);
console.log("Is string 1 == string 2? I predict True");
console.log(str1 == str2);

let name1: string = "PIAIC";
let name2: string = "piaic";
console.log("\nUpper case abbreviation is " + name1);
console.log("Lower case abbreviation is " + name2);
console.log(
  "Is Upper case abbreviation == Lower case abbreviation? I predict False"
);
console.log(name1 == name2);

let numeric = 5;
console.log("\nNumber is " + numeric);
console.log("Is number < 10? I predict True");
console.log(numeric < 10);

let a: number = 10;
let b: number = 20;
console.log("\nx = " + a, " y = " + b);
console.log("Is x > y? I predict False");
console.log(a > b);

let u: number = -10;
console.log("\nNumber is " + u);
console.log("Is number is positive even? I predict False");
console.log(u > 0 && u % 2 == 0);

let myname: string = "abdullah";
console.log("\nName is " + myname);
console.log("Abdullah || abdullah are same name? I predict True");
console.log(myname == "Abdullah" || myname == "abdullah");

let carSet: string[] = ["Honda", "Toyota", "Suzuki", "Kia"];
console.log("\nCar brands are: " + carSet);
console.log("Is Honda included in car brands? I predict True");
console.log(carSet.includes("Honda"));

let capital: string[] = ["Lahore", "Karachi", "Peshawar", "Quetta"];
console.log("\nProvincial capitals are: " + capital);
console.log("Is Lahore not included in provincial capitals? I predict False");
console.log(!capital.includes("Lahore"));
