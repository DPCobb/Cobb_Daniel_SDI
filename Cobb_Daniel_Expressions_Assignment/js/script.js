/*
Daniel Cobb
SDI Section 01
Expressions Assignment
9-5-15
 */

//alert("test")

// Calculate fuel cost and how many tanks of gas a trip will take
// Ask user for their name and tell them what we will be calculating
var user = prompt("We are going to calculate the cost of your trip.\nPlease enter your name");
console.log(user);

// Ask user for length of trip in miles
var tripLen = prompt(user + " enter the length of your trip in miles");
console.log(tripLen + " miles total");

// Ask for vehicles estimated miles per gallon
var estMpg = prompt("Enter your vehicles estimated miles per gallon");
console.log(estMpg + " mpg");

// Ask for vehicles fuel tank size
var tankSize = prompt("Enter your gas tank capacity");
console.log(tankSize + " total gallons per full tank");

// Ask for average cost of fuel per gallon
var fuelCost = prompt("Enter average cost of fuel per gallon");
console.log(fuelCost + " dollars per gallon");

// Calculate the cost of the trip by total gallons of gas: (tripLen/estMpg)*fuelCost
var costTrip = (tripLen/estMpg) * fuelCost;
console.log(costTrip + " dollars");