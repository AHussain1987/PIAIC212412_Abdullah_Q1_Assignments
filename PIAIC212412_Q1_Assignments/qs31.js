"use strict";
/*
No Users:
Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the userNames from your array, and make sure the correct message is printed.
*/
let userNames = ["Hussain", "Sam", "Ali", "Admin", "Umar"];
if (userNames.length == 0) {
    console.log("We need to find some users!");
}
else {
    for (let a = 0; a < userNames.length; a++) {
        if (userNames[a] == "Admin")
            console.log("Hello admin, would you like to see a status report?");
        else
            console.log("Hello " + userNames[a] + ", thank you for logging in again.");
    }
}
console.log("\nNow removing all the user names for this list:\n");
userNames.splice(0, userNames.length);
//let userNames:string[]=[];
if (userNames.length == 0) {
    console.log("We need to find some users!");
}
else {
    for (let a = 0; a < userNames.length; a++) {
        if (userNames[a] == "Admin")
            console.log("Hello admin, would you like to see a status report?");
        else
            console.log("Hello " + userNames[a] + ", thank you for logging in again.");
    }
}
