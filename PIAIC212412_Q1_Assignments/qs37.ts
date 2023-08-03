/*
Large Shirts: 
Modify the make_shirt() function 
so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.
*/

function largeShirts(
  sizeOf: string = "large",
  textOf: string = "I love typescript"
) {
  if (sizeOf == "large" || sizeOf == "medium") {
    console.log("I love typescript");
  } else {
    console.log(`Your shirt size is: ${sizeOf}`);
    console.log(textOf);
  }
}
largeShirts();
largeShirts("medium", "This is by new shirt");
largeShirts("small", "This is my best choice");
