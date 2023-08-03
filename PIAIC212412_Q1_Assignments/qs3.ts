/*
Name Cases: 
Store a person’s name in a variable, and then print that person’s name in 
lowercase, uppercase, and titlecase.
*/

let personName: string = "saYed abDullah Hussain";

//lowercase name
console.log("Lowercase Name is: " + personName.toLowerCase());

//uppercase name
console.log("Uppercase Name is: " + personName.toUpperCase());

//defining function titlecase
function titleCase(str: string) {
  const lowerCaseStr = str.toLowerCase(); //first convert all the string to lowercase
  let nameBreak: string[] = lowerCaseStr.split(" "); //breaking the full name into individual strings
  let j: number = 0; //connverting the alphabet at index[0] into uppercase
  for (j = 0; j < nameBreak.length; j++) {
    nameBreak[j] = nameBreak[j].charAt(0).toUpperCase() + nameBreak[j].slice(1);
  }
  console.log("TitleCase Name is: " + nameBreak.join(" "));
}

//titlecase name
titleCase(personName);
