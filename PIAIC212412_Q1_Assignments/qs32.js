"use strict";
/*
Checking Usernames:
Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called currentUser.
• Make another list of five usernames called newUsers.
Make sure one or two of the new usernames are also in the currentUser list.
• Loop through the newUsers list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
let currentUser = ["Hussain", "riaz", "ahmed", "umar", "inam", "ali"];
//converting all the user name data into lowercase
let currentUser_lowercase = [];
for (let i = 0; i < currentUser.length; i++) {
    //let currentUser_lowercase:string[] = []
    currentUser_lowercase[i] = currentUser[i].toLowerCase();
}
//list of five uew users
let newUsers = ["sam", "Umar", "hussain", "tariq", "pasha"];
for (let a = 0; a < newUsers.length; a++) {
    if (currentUser_lowercase.includes(newUsers[a].toLowerCase())) {
        console.log("Please select a different username"); //condition when user name already exists
    }
    else {
        console.log("username is available"); //condtiion when user name is available
    }
}
