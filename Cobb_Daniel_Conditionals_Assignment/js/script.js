
 /*
Daniel Cobb
SDI Section 01
Conditionals Assignment
September 2013, 2015
 */

//alert("test")

//Determine the weight of a truck carrying a load and determine if the truck is overweight and if so by how much.

//Explain to the user what we are doing and get their name.
var user = prompt("We are going to calculate the weight of your truck and determine if it is overweight.\nFirst off, what's your name?");
//Check to make sure user is not empty
if (user == "") {
    user = prompt("Looks like you forgot to introduce yourself, what's your name?");
    console.log(user + " is the current user.");
}
//Check to make sure user is not a number
else if (/[0-9]/.test(user)){
    user = prompt("Uh oh, looks like you put some numbers in your name, please re enter your name");
    console.log(user + " is the current user.");
 }
else {
    console.log(user + " is the current user.");
}
//Ask the user for the weight of their unloaded truck
var truckEmpty = prompt(user + " what is the weight of your truck in pounds while empty?");
//Set up truckCheck variable, used to check if truckEmpty is in pounds
var truckCheck = truckEmpty.length;
//Set up truckLbs variable, used to check if truckEmpty only contains numbers
var truckLbs = (/^[0-9]+$/.test(truckEmpty));
//Validate truckEmpty
//Check truck weight is in lbs, greater than 999, and is only numbers
if (truckCheck < 4 && truckLbs){
    truckEmpty = prompt(user + " you may have entered the weight of your truck in tons, please enter the weight of your truck in lbs.");
    console.log(user + "'s truck weighs " + truckEmpty + " lbs while empty");
}
//Check if truck weight has letters in it
else if (/[a-z, A-Z]/.test(truckEmpty)){
    truckEmpty = prompt(user + " your truck weight cannot have letters, please re enter weight in pounds.");
    console.log(user + "'s truck weighs " + truckEmpty + " lbs while empty");
}
//Ensure truckEmpty is not an empty string
else if (truckEmpty == ""){
     truckEmpty = prompt("Oops, " + user + " you forgot to enter your truck's empty weight in pounds");
     console.log(user + "'s truck weighs " + truckEmpty + " lbs while empty");
}
else {
    console.log(user + "'s truck weighs " + truckEmpty + " lbs while empty");
}
//Ask the user for the weight of their load
var loadWeight = prompt(user + " what is the weight of the load you will be carrying in tons?");
//Check loadWeight is in lbs, is not an empty string, and only contains numbers
var loadCheck = loadWeight.length;
(parseInt(loadCheck) <= 2 && loadWeight != "" && /^[0-9]+$/.test(loadWeight)) ?  console.log("Load weight is valid") : loadWeight = prompt(user + " please re enter the weight of your load in tons");
console.log(user + " is carrying " + loadWeight + " tons.");
//Ask for trucks max weight
var truckMax = prompt(user + " please enter your trucks Gross Vehicle Weight Rating(GVWR) in pounds");
//Verify GVWR is not empty
if (truckMax == ""){
    truckMax = prompt(user + " this field cannot be empty, please enter your vehicles GVWR in pounds");
    console.log(user + "'s vehicle has a maximum weight of " + truckMax);
}
//Verify GVWR does not contain letters
else if (/[a-z, A-Z]/.test(truckMax)) {
     truckMax = prompt(user + " your GVWR cannot contain letters, please re enter");
     console.log(user + "'s vehicle has a maximum weight of " + truckMax);
}
//Verify GVWR is greater than the empty truck weight
else if (parseInt(truckMax) < parseInt(truckEmpty)) {
    truckMax = prompt(user + " your GVWR shouldn't be lower than your empty truck weight of " + truckEmpty + " please re enter GVWR");
    console.log(user + "'s vehicle has a maximum weight of " + truckMax);
}
else{
    console.log(user + "'s vehicle has a maximum weight of " + truckMax);
}
//Set loadWeight from tons to lbs
var lbs = parseInt(loadWeight) * 2000;
console.log(loadWeight + " tons is " + lbs + " lbs.");
//Get total truck weight by combining empty weight and load weight
var truckTotal = parseInt(truckEmpty) + parseInt(lbs);
console.log(truckTotal + " lbs is the total weight of the truck");
//Compare truckTotal to truckMax to figure out if the truck is over/under max weight
var over = parseInt(truckTotal) - parseInt(truckMax);
var under = parseInt(truckMax) - parseInt(truckTotal);
//Alert user to trucks weight over, under, or at max
if (truckTotal > truckMax){
    alert(user + " your vehicle is overweight at " + truckTotal + " lbs! You are " + over + " lbs over your max weight of " + truckMax + " lbs!");
    console.log(user + " your vehicle is overweight at " + truckTotal + " lbs! You are " + over + " lbs over your max weight of " + truckMax + " lbs!");
}
else if(truckTotal < truckMax){
    alert(user + " your vehicle is underweight at " + truckTotal + " lbs! You are " + under + " lbs under your max weight of " + truckMax + " lbs!");
    console.log(user + " your vehicle is underweight at " + truckTotal + " lbs! You are " + under + " lbs under your max weight of " + truckMax + " lbs!");
}
else{
    alert(user + " your vehicle is at its max weight of " + truckMax + " lbs!");
    console.log(user + " your vehicle is at its max weight of " + truckMax + " lbs!");
}