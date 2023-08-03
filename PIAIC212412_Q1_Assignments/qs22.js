"use strict";
/*
Intentional Error:
If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.
*/
let guests = ["Ahmad Ali", "Umar Ghani", "Muhammad Usman"];
function invitation(str) {
    for (let i = 0; i < str.length; i++) {
        console.log("Hello " + str[i] + ", Please come to my home on Saturday for a dinner");
    }
}
invitation(guests);
//Generating index error
//let guestout:string=guests[18]
//guest not coming
let guestout = guests[1];
console.log(guestout + " is not coming to dinner\n");
//new guest list
let newguest = "Imran Alam";
for (let j = 0; j < guests.length; j++) {
    if (guests[j] == guestout)
        guests[j] = newguest;
}
invitation(guests);
