"use strict";
/*
Adding Comments:
Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write because your programs are too simple at this point,
just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.
*/
//This program stripped all the white spaces from a name
//Defining the name with spaces, tabs and next line
let theName = "  Ab\n  d\tu  l\nla\th";
//printing the name with space and tabs
console.log("Name including white spaces is:\n" + theName);
//splitting each character of the name string using split function and store it into an array of strings
let stripSpace = theName.split("");
//stripping the white spaces by using trim function
for (let i = 0; i < stripSpace.length; i++) {
    stripSpace[i] = stripSpace[i].trim();
}
//printing the name with white spaces stripped
console.log("Name after stripping the white spaces is:\n" + stripSpace.join(""));
