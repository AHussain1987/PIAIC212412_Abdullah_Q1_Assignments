/*
Changing Guest List: 
You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. 
Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest 
who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/

//variable declaration
let guests: string[] = ["Ahmad Ali", "Umar Ghani", "Muhammad Usman"];

//dinner invitation function
function invitation(str: string[]) {
  for (let i = 0; i < str.length; i++) {
    console.log(
      "Hello " + str[i] + ", Please come to my home on Saturday for a dinner"
    );
  }
}
invitation(guests);

//guest who in not coming
let guestOut: string;
guestOut = guests[1];
console.log(`\n${guestOut} is not coming to dinner\n`);

//new guest list
const newGuest: string = "Imran Alam";

for (let j = 0; j < guests.length; j++) {
  if (guests[j] == guestOut) guests[j] = newGuest;
}

invitation(guests);

export {};
