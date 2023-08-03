/*
Seeing the World: 
Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. 
Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. 
Print the list to show that its order has changed.
*/

const worldPlace: string[] = [
  "Malaysia",
  "Canada",
  "Thailand",
  "Switzerland",
  "Iceland",
];
console.log(`Places in the world I would like to visit are:\n${worldPlace}`);

//printing the list in original order
let newList: string[] = [];
for (let i = 0; i < worldPlace.length; i++) {
  newList[i] = worldPlace[i];
}
console.log(`\nList in original order is:\n${newList}`);

//printing the new list in alphabetical order without modifying original list
let world_place_sorted: string[] = newList.sort();

console.log(`\nNew list in alphabetical order is:\n${world_place_sorted}`);
console.log(`\nOriginal list is:\n${worldPlace}`);

//printing the new list in reverse order wothout modifying original list
let world_place_reverse: string[] = newList.reverse();
console.log(
  `\nNew list in reverse alphabetical order is:\n${world_place_reverse}`
);
console.log(`\nOriginal list is:\n${worldPlace}`);

//reversing the list
worldPlace.reverse();
console.log(`\nOriginal list in reverse order is:\n${worldPlace}`);

//again reversing the list to verify the origianl list
worldPlace.reverse();
console.log(`\nReversing again to print the original list:\n${worldPlace}`);

//printing the orignal list in alphabetical order
worldPlace.sort();
console.log(`\nOriginal list modified to alphabetical order:\n${worldPlace}`);

//printing the original list in reverse order
worldPlace.reverse();
console.log(
  `\nOriginal list modified in reverse alphabetical order:\n${worldPlace}`
);
