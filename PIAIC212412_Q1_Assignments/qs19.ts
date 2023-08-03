/*
Dinner Guests: 
Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.
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

//printing number of guests
console.log("Number of guests invited:\n" + guests.length);

export {};
