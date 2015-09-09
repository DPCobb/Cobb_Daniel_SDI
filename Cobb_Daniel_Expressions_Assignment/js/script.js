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
console.log(costTrip + " dollars to complete trip");

// Calculate how many tanks of gas your trip will take
var totTank = (tripLen/estMpg) / tankSize;
console.log(totTank + " tanks of gas");

// Limit results of costTrip to hundredths
costTrip = costTrip.toFixed(2);
console.log (costTrip + " dollars to complete trip rounded");

// Limit tanks to tenths of a gallon
totTank = totTank.toFixed(1);
console.log(totTank + " tanks of gas rounded");

// Tell user the cost of their trip and how many tanks of fuel
var tripOut = ["Your trip will cost $" + costTrip + " and use about " + totTank + " tank of gas.", "Your trip will cost $" + costTrip + " and use less than 1 tank of gas.", "Your trip will cost $" + costTrip + " and use about " + totTank + " tanks of gas."];
if (totTank == 1){
    alert(tripOut[0]);}
else if (totTank <=1){
    alert(tripOut[1]);}
else{
    alert(tripOut[2]);}
console.log(user + " your trip will cost $" + costTrip + " and use about " + totTank + " tanks of gas.");

// Add 5 miles for rest stops, refueling, breaks etc
tripLen = parseInt(tripLen);
tripLen += 5;

//Recalculate values
console.log("Add 5 miles to account for rest breaks, refuels, detours etc");
// Calculate the cost of the trip by total gallons of gas: (tripLen/estMpg)*fuelCost
var costTripMod = (tripLen/estMpg) * fuelCost;
console.log(costTripMod + " dollars to complete trip");

// Calculate how many tanks of gas your trip will take
var totTankMod = (tripLen/estMpg) / tankSize;
console.log(totTankMod + " tanks of gas");

// Limit results of costTrip to hundredths
costTripMod = costTripMod.toFixed(2);
console.log (costTripMod + " dollars to complete trip rounded");

// Limit tanks to tenths of a gallon
totTankMod = totTankMod.toFixed(1);
console.log(totTankMod + " tanks of gas rounded");

// Tell user the cost of their trip and how many tanks of fuel with 5 extra miles for stops and detours
var tripOutMod = ["Accounting for stops and detours, your trip will cost $" + costTripMod + " and use about " + totTankMod + " tank of gas.", "Accounting for stops and detours, your trip will cost $" + costTripMod + " and use less than 1 tank of gas.", "Accounting for stops and detours, your trip will cost $" + costTripMod + " and use about " + totTankMod + " tanks of gas."];
if (totTankMod == 1){
    alert(tripOutMod[0]);}
else if (totTankMod <=1){
    alert(tripOutMod[1]);}
else{
    alert(tripOutMod[2]);}
console.log(user + " your trip will cost $" + costTripMod + " and use about " + totTankMod + " tanks of gas.");
