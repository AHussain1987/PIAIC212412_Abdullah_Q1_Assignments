"use strict";
/*
Animals:
Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!
*/
let animals = ["dog", "cat", "cow", "rabbit"];
for (let a = 0; a < animals.length; a++) {
    console.log(animals[a]);
}
console.log("\n");
for (let b = 0; b < animals.length; b++) {
    console.log("A " + animals[b] + " is a great pet to keep at home");
}
console.log("\nAny of these animals are safe and can be kept at home.");
