"use strict";
/*
Great Magicians:
Start with a copy of your program from Exercise 39.
Write a function called makeGreat()
that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call showMagicianss() to see that the list has actually been modified.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//importing array magicianName and function showMagicians() from qs41
//import {magicianName, showMagicians} from "./qs41.js"
let magicianName = ["David", "Tom", "Micheal", "Brown"];
//function to print the names
function showMagicians(magName) {
    for (let m = 0; m < magName.length; m++) {
        console.log(magName[m]);
    }
}
showMagicians(magicianName);
console.log('\nModified array with addition of "Great"');
//function to modify the names of original array by adding 'Great'
function makeGreat(grName) {
    for (let n = 0; n < grName.length; n++) {
        grName[n] = "Great " + grName[n];
    }
}
//passing the imported array from qs41 into makeGreat() function
makeGreat(magicianName);
showMagicians(magicianName);
