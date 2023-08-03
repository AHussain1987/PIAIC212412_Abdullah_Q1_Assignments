/*
T-Shirt:
Write a function called make_shirt() 
that accepts a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. 
Call the function.
*/

//function to print text and size on shirt
function makeShirt(size: string, text: string) {
  console.log(`${text} and its size is ${size}`);
}

let sizeOfShirt: string = "Medium";
let textOnShirt: string = "This is my new Polo shirt";

makeShirt(sizeOfShirt, textOnShirt);
