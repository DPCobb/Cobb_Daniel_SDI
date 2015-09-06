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
var costTrip = costTrip.toFixed(2);
console.log (costTrip + " dollars to complete trip rounded");

// Limit tanks to tenths of a gallon
var totTank = totTank.toFixed(1);
console.log(totTank + " tanks of gas rounded");

// Tell user the cost of their trip and how many tanks of fuel
if (totTank == 1){
    alert("Your trip will cost " + costTrip + " dollars and use about " + totTank + " tank of gas.");}
else if (totTank <=1){
    alert("Your trip will cost " + costTrip + " dollars and use less than 1 tank of gas.");}
else{
    alert("Your trip will cost " + costTrip + " dollars and use about " + totTank + " tanks of gas.");};
console.log(user + " your trip will cost " + costTrip + " dollars and use about " + totTank + " tanks of gas.");

// Add 5 miles for rest stops, refueling, breaks etc
var tripLen = parseInt(tripLen);
var tripLen = tripLen += 5;

//Recalculate values
console.log("Add 5 miles to account for rest breaks, refuels, detours etc")
// Calculate the cost of the trip by total gallons of gas: (tripLen/estMpg)*fuelCost
var costTrip = (tripLen/estMpg) * fuelCost;
console.log(costTrip + " dollars to complete trip");

// Calculate how many tanks of gas your trip will take
var totTank = (tripLen/estMpg) / tankSize;
console.log(totTank + " tanks of gas");

// Limit results of costTrip to hundredths
var costTrip = costTrip.toFixed(2);
console.log (costTrip + " dollars to complete trip rounded");

// Limit tanks to tenths of a gallon
var totTank = totTank.toFixed(1);
console.log(totTank + " tanks of gas rounded");

// Tell user the cost of their trip and how many tanks of fuel
if (totTank == 1){
    alert("Accounting for stops and detours, your trip will cost " + costTrip + " dollars and use about " + totTank + " tank of gas.");}
else if (totTank <=1){
    alert("Accounting for stops and detours, your trip will cost " + costTrip + " dollars and use less than 1 tank of gas.");}
else{
    alert("Accounting for stops and detours, your trip will cost " + costTrip + " dollars and use about " + totTank + " tanks of gas.");};
console.log(user + " your trip will cost " + costTrip + " dollars and use about " + totTank + " tanks of gas.");
