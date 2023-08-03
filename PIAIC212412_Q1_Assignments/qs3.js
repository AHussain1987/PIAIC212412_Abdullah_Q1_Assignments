"use strict";
/*
Name Cases:
Store a person’s name in a variable, and then print that person’s name in
lowercase, uppercase, and titlecase.
*/
let personName = "saYed abDullah Hussain";
//lowercase name
console.log("Lowercase Name is: " + personName.toLowerCase());
//uppercase name
console.log("Uppercase Name is: " + personName.toUpperCase());
//defining function titlecase
function titleCase(str) {
    const lowerCaseStr = str.toLowerCase(); //first convert all the string to lowercase
    let nameBreak = lowerCaseStr.split(" "); //breaking the full name into individual strings
    let j = 0; //connverting the alphabet at index[0] into uppercase
    for (j = 0; j < nameBreak.length; j++) {
        nameBreak[j] = nameBreak[j].charAt(0).toUpperCase() + nameBreak[j].slice(1);
    }
    console.log("TitleCase Name is: " + nameBreak.join(" "));
}
//titlecase name
titleCase(personName);
