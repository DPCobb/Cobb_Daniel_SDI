/*
Daniel Cobb
SDI Section 01
Expressions Assignment
9-5-15
 */


// Calculate fuel cost and how many tanks of gas a trip will take

// Ask user for their name and tell them what we will be calculating
var user = prompt("We are going to calculate the cost of your trip.\nPlease enter your name");
console.log(user + " is the current user.");

// Ask user for length of trip in miles
var tripLen = prompt(user + " enter the length of your trip in miles");
console.log(tripLen + " total miles of travel.");

// Ask for vehicles estimated miles per gallon
var estMpg = prompt("Enter your vehicles estimated miles per gallon");
console.log(estMpg + " mpg estimated for vehicle.");

// Ask for vehicles fuel tank size
var tankSize = prompt("Enter your gas tank capacity");
console.log(tankSize + " total gallons per full tank.");

// Ask for average cost of fuel per gallon
var fuelCost = prompt("Enter average cost of fuel per gallon");
console.log(fuelCost + " dollars per gallon fuel cost.");
// Calculate the cost of the trip by total gallons of gas: (tripLen/estMpg)*fuelCost
var costTrip = (tripLen/estMpg) * fuelCost;
console.log(costTrip + " dollars to complete trip.");

// Calculate how many tanks of gas your trip will take
var totTank = (tripLen/estMpg) / tankSize;
console.log(totTank + " tanks of gas to complete trip.");

// Limit results of costTrip to hundredths
costTrip = costTrip.toFixed(2);
console.log (costTrip + " dollars to complete trip rounded to nearest hundredth.");

// Limit tanks to tenths of a gallon
totTank = totTank.toFixed(1);
console.log(totTank + " tanks of gas rounded to nearest tenth.");

// Tell user the cost of their trip and how many tanks of fuel it will take
// Place possible messages to user in an Array, different outputs based on tanks of fuel
var tripOut = ["Your trip will cost $" + costTrip + " and use about " + totTank + " tank of gas.", "Your trip will cost $" + costTrip + " and use less than 1 tank of gas.", "Your trip will cost $" + costTrip + " and use about " + totTank + " tanks of gas."];
// Decide which message to send user based on tanks of fuel
if (totTank == 1){
    alert(tripOut[0]);}
else if (totTank <=1){
    alert(tripOut[1]);}
else{
    alert(tripOut[2]);}
console.log(user + "'s trip will cost $" + costTrip + " and use about " + totTank + " tanks of gas.");

// Add 5 miles for rest stops, refueling, breaks etc
tripLen = parseInt(tripLen);
tripLen += 5;

//Recalculate values
console.log("Add 5 miles to account for rest breaks, refuels, detours etc.");
// Calculate the cost of the trip by total gallons of gas: (tripLen/estMpg)*fuelCost
var costTripMod = (tripLen/estMpg) * fuelCost;
console.log(costTripMod + " dollars to complete modified trip.");

// Calculate how many tanks of gas your trip will take
var totTankMod = (tripLen/estMpg) / tankSize;
console.log(totTankMod + " tanks of gas to complete modified trip.");

// Limit results of costTrip to hundredths
costTripMod = costTripMod.toFixed(2);
console.log (costTripMod + " dollars to complete modified trip rounded to nearest hundredth.");

// Limit tanks to tenths of a gallon
totTankMod = totTankMod.toFixed(1);
console.log(totTankMod + " tanks of gas rounded to nearest tenth to complete modified trip.");

// Tell user the cost of their trip and how many tanks of fuel with 5 extra miles for stops and detours
// Place possible messages to user in an Array, different outputs based on tanks of fuel
var tripOutMod = ["Accounting for stops and detours, your trip will cost $" + costTripMod + " and use about " + totTankMod + " tank of gas.", "Accounting for stops and detours, your trip will cost $" + costTripMod + " and use less than 1 tank of gas.", "Accounting for stops and detours, your trip will cost $" + costTripMod + " and use about " + totTankMod + " tanks of gas."];
// Decide which message to send user based on tanks of fuel
if (totTankMod == 1){
    alert(tripOutMod[0]);}
else if (totTankMod <=1){
    alert(tripOutMod[1]);}
else{
    alert(tripOutMod[2]);}
console.log(user + "'s trip will cost $" + costTripMod + " and use about " + totTankMod + " tanks of gas after the addition of 5 miles.");
// Give additional information on cost due to extra miles
console.log("Additional mileage cost:");
// Set miles into array
var addMile = [5, 50, 100];
// Determine extra cost for added 5 miles
var extraCost = (addMile[0]/estMpg) * fuelCost;
// Limit extra cost to hundredth place
extraCost = extraCost.toFixed(2);
// Display extra cost information
console.log("If " + user + " travels 5 miles more it will add an additional $" + extraCost);
// Determine extra cost for additional 50 miles, limit decimal place, and display information
extraCost = (addMile[1]/estMpg) * fuelCost;
extraCost = extraCost.toFixed(2);
console.log("If " + user + " travels 50 miles more it will add an additional $" + extraCost);
// Determine extra cost for additional 100 miles, limit decimal place, and display information
extraCost = (addMile[2]/estMpg) * fuelCost;
extraCost = extraCost.toFixed(2);
console.log("If " + user + " travels 100 miles more it will add an additional $" + extraCost);

/* Tested with the following values:
Total miles: 100
MPG: 10
Tank Size: 10
Fuel Cost: 1.00
Evaluates to: $10 and 1 tank of gas
    100miles/10mpg = 10 gal of gas = 1 tank of gas
    10 gal of gas * 1.00 fuel cost = $10
After additional 5 miles:
Evaluates to: $10.50 and 1.1 tanks of gas
    105miles/10mpg = 10.5 gal of gas = 1.1 tanks of gas
    10.5 gal of gas * 1.00 fuel cost = $10.50
Additional Cost: $.5, $5, $10

Total miles: 250
MPG: 25
Tank Size: 10
Fuel Cost: 2.00
Evaluates to: $20 and 1 tank of gas
    250/25 = 10 = 1 tank of gas
    10 * 2 = $20 of gas
After additional 5 miles:
Evaluates to: $20.40 and 1 tanks of gas
    255/25 = 10.2 = 1.02 tanks of gas
    10.2 * 2 = $20.40 of gas
Additional Cost: $.4, $4, $8
 */