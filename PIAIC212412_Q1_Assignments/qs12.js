"use strict";
/*
Greetings:
Start with the array you used in Exercise 11,
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.
*/
let nameOfFriends = ["Azhar", "Arman", "Omer", "Hassan", "Tariq"];
console.log("The list of message with names is:");
for (let n = 0; n < nameOfFriends.length; n++) {
    console.log(`Hello ${nameOfFriends[n]}, how are you?`);
}
