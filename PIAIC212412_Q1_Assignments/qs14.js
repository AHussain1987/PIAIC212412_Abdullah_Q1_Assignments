"use strict";
/*
Guest List:
If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
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
