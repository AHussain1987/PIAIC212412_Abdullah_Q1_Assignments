"use strict";
/*
Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//variable declaration
let guests = ["Ahmad Ali", "Umar Ghani", "Muhammad Usman"];
//dinner invitation function
function invitation(str) {
    for (let i = 0; i < str.length; i++) {
        console.log("Hello " + str[i] + ", Please come to my home on Saturday for a dinner");
    }
}
invitation(guests);
//guest who in not coming
let guestOut;
guestOut = guests[1];
console.log(`\n${guestOut} is not coming to dinner\n`);
//new guest list
const newGuest = "Imran Alam";
for (let j = 0; j < guests.length; j++) {
    if (guests[j] == guestOut)
        guests[j] = newGuest;
}
invitation(guests);
//informing people that I have more dining space
console.log("\nGuests, we have some extra space available on the dining table\n");
//defining new guests
const newGuest1 = "Tariq Mehmood";
const newGuest2 = "Asim Khan";
const newGuest3 = "Adeel Mustafa";
//adding a new guest at start of array
guests.splice(0, 0, newGuest1);
//adding a new guest in the third place of array
guests.splice(4, 0, newGuest2);
//adding guest in the last place of array
guests.push(newGuest3);
invitation(guests);
//now only two guests can be invited
console.log("\nUnfortunately, now I can invite only two people\n");
//messages for not invited
function notInvited(str) {
    const guestQty = str.length;
    for (let k = 0; k < guestQty - 2; k++) {
        console.log(str[str.length - 1] + ", you are not invited");
        str.pop();
    }
}
notInvited(guests);
//messages for invited guests
invitation(guests);
//empty the array
guests.pop();
guests.pop();
console.log(guests);
if (guests.length == 0) {
    console.log("\nThe list is empty now");
}
else
    console.log(guests);
