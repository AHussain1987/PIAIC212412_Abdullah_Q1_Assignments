/*
Sandwiches: 
Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.
*/

//declaring function sandwiches with rest parameter
function sandwiches(...ingredients: string[]) {
  return console.log(
    "The sandwiches you selected for today's meal include " +
      ingredients.join(", ")
  );
}

//calling function sandwiches with different arguments
sandwiches("onion", "garlic", "tomatoes");
sandwiches("black pepper", "mashrooms", "jalapeno", "cucambar");
