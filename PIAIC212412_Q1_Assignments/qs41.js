"use strict";
/*
Magicians:
Make a array of magician’s names.
Pass the array to a function called showMagicianss(), which prints the name of each magician in the array.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let magicianName = ["David", "Tom", "Micheal", "Brown"];
//function to print the names
function showMagicians(magName) {
    for (let m = 0; m < magName.length; m++) {
        console.log(magName[m]);
    }
}
showMagicians(magicianName);
