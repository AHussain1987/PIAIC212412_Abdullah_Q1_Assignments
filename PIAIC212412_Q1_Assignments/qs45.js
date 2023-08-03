"use strict";
/*
Cars:
Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.
*/
//declaring function CarInfo with fixed input parameters of manufacturer and modelName
//along with other optional parameters
function CarInfo(manufacturer, modelName, ...index) {
    const carInfo = {
        Manufacturer: manufacturer,
        Model: modelName,
    };
    //generating error if optional parameters are not declared in number-value pair
    if (index.length % 2 !== 0)
        throw "Error! Please enter a name-value pair for optional parameters";
    //loop program to store the optional parameters in object
    for (let c = 0; c < index.length; c += 2) {
        const optParam = index[c];
        const value = index[c + 1];
        carInfo[optParam] = value;
    }
    return carInfo;
}
//calling function CarInfo with different parameters
const car1 = CarInfo("Honda", "Civic");
console.log(car1);
const car2 = CarInfo("Suzuki", "Swift", "Color", "Red", "Make", "2023");
console.log(car2);
const car3 = CarInfo("Kia", "Sportage", "Price", "PKR 9 Million", "Color", "Black", "Make", "2023");
console.log(car3);
