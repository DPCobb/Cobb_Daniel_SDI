/*
Daniel Cobb
SDI Section 01
Conditionals Worksheet
September 17, 2015
 */

//Stuff your face I
//Get users weight and set the minimum weight for the heavyweight division
var weight = prompt("Please enter your weight so we can see if you qualify for the heavyweight division");
var weightMin = 250;
//Compare weight to weightMin and determine if user qualifies.
if(parseInt(weight)>=weightMin){
    alert("The competitor qualifies for the heavyweight division.");
    console.log("The competitor qualifies for the heavyweight division at " + weight + " lbs.");
}
else{
    alert("The competitor needs to gain some weight!");
    console.log("The competitor needs to gain some weight at " + weight + " lbs");
}

//Last Chance For Gas!
//Determine if user has enough gas left to travel a given distance

var distToNextGas = prompt("Please enter the miles until the next gas station");
var carMpg = prompt("Please enter your cars estimated MPG");
var tank = prompt("Please enter the % of gas you have left in your gas tank: 25, 50, 75 etc.");
var tankCapacity = prompt("How much gas can your tank hold?");

//Determine how many gal of gas are in the tank

var currentTank = parseInt(tankCapacity) * parseInt(tank) / 100;
console.log(currentTank + " gallons of gas left in the tank");

//Determine how many gals it will take to cross the given distance
var gasReq = distToNextGas / carMpg;
console.log("Distance requires " + gasReq + " gallons of gas");

if(gasReq > currentTank){
    alert("Your trip will require " + gasReq + " gallons of gas, you only have " + currentTank + " gallons left, you need to fill up");
}
else{
    alert("You have enough gas to make the trip");
}

