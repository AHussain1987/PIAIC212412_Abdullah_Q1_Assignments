/*Alien Colors #1: 
Imagine an alien was just shot down in a game. 
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. 
If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. 
(The version that fails will have no output.)
*/

let alienColor: string = "green";

//true condition of 5 points earned
if (alienColor == "green") {
  console.log("Executing if block:");
  console.log("You earned 5 points");
}

//false condition of 5 points earned
let alienColor1: string = "yellow";

if (alienColor1 == "green") {
  console.log("Executing if block:");
  console.log("You earned 5 points");
}
