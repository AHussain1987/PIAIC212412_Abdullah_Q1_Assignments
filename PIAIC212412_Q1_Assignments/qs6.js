"use strict";
/*
Stripping Names:
Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let theName = "  Ab\n  d\tu  l\nla\th";
console.log("Name including white spaces is:\n" + theName);
//stripping the white spaces
let stripSpace = theName.split(""); //splitting the string into an array of substrings using split()
for (let s = 0; s < stripSpace.length; s++) {
    //removing the white spaces from both end of substrings using trim()
    stripSpace[s] = stripSpace[s].trim();
}
//joining the substrings and printing
console.log("Name after stripping the white spaces is:\n" + stripSpace.join(""));
