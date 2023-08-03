/*
More Guests: 
You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
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

//informing people that I have more dining space
console.log(
  "\nGuests, we have some extra space available on the dining table\n"
);

//defining new guests
const newGuest1: string = "Tariq Mehmood";
const newGuest2: string = "Asim Khan";
const newGuest3: string = "Adeel Mustafa";

//adding a new guest at start of array
guests.splice(0, 0, newGuest1);

//adding a new guest in the third place of array
guests.splice(4, 0, newGuest2);

//adding guest in the last place of array
guests.push(newGuest3);

invitation(guests);

export {};
