/*
Alien Colors #2: 
Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/

let aliencolor2: string = "green";

//case when if condition is true
if (aliencolor2 == "green") {
  console.log("Executing if block:");
  console.log("You earned 5 points\n");
} else {
  console.log("Executing else block:");
  console.log("You earned 10 points\n");
}

//case when else condition is true
let aliencolor2a: string = "yellow";

if (aliencolor2a == "green") {
  console.log("Executing if block:");
  console.log("You earned 5 points\n");
} else {
  console.log("Executing else block:");
  console.log("You earned 10 points\n");
}
