/*
Unchanged Magicians: 
Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call showMagicians() with each array to show that you have one array of the original names 
and one array with the Great added to each magician’s name.
*/

let magicianName: string[] = ["David", "Tom", "Micheal", "Brown"];

//function to print the names
function showMagicians(magName: string[]) {
  for (let m = 0; m < magName.length; m++) {
    console.log(magName[m]);
  }
}
console.log(`Original array is: ${magicianName}`);

//function to modify the names of original array by adding 'Great'
function make_great(grName: string[]) {
  for (let n = 0; n < grName.length; n++) {
    grName[n] = "Great " + grName[n];
  }
}
let copy_magicianName: string[] = [];

//function to make a duplicate of original array
function copy_array(origArray: string[], copy_origArray: string[]) {
  for (let n = 0; n < origArray.length; n++) {
    copy_origArray[n] = origArray[n];
  }
}

copy_array(magicianName, copy_magicianName);

//showMagicians with a copy of orignal array
console.log("\nshowMagician() with a copy of original array");
make_great(copy_magicianName);
showMagicians(copy_magicianName);

//showMagicians with original array
console.log("\nshowMagician() with original array");
make_great(magicianName);
showMagicians(magicianName);
