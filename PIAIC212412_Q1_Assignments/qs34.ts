/* 
Pizzas: 
Think of at least three kinds of your favorite pizza. 
Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza 
instead of printing just the name of the pizza. 
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
The output should consist of three or more lines about the kinds of pizza you like 
and then an additional sentence, such as I really love pizza!
*/

let pizzaNames: string[] = ["tikka", "fajita", "supreme"];
for (let p = 0; p < pizzaNames.length; p++) {
  console.log(pizzaNames[p]);
}
console.log("\n");
for (let q = 0; q < pizzaNames.length; q++) {
  console.log("I like " + pizzaNames[q] + " pizza");
}

console.log(
  "\nPizza is one of my favourite food.\nChicken Supreme is the most I liked, because sausages are really delicious.\nI often eat pizza on weekends."
);
