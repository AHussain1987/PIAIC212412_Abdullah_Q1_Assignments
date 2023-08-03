/*
Cities: 
Write a function called descrribeCity() 
that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. 
Give the parameter for the country a default value. 
Call your function for three different cities, at least one of which is not in the default country.
*/

function descrribeCity(cityName: string, countryName: string = "Pakistan") {
  console.log(`${cityName} is in ${countryName}`);
}

descrribeCity("Lahore", "Pakistan");
descrribeCity("Mumbai", "India");
descrribeCity("Karachi");
