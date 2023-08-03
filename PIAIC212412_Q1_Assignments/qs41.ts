/*
Magicians: 
Make a array of magician’s names. 
Pass the array to a function called showMagicianss(), which prints the name of each magician in the array.
*/

let magicianName: string[] = ["David", "Tom", "Micheal", "Brown"];

//function to print the names
function showMagicians(magName: string[]) {
  for (let m = 0; m < magName.length; m++) {
    console.log(magName[m]);
  }
}

showMagicians(magicianName);

export {};
