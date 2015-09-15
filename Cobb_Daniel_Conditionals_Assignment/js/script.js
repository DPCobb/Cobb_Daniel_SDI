
 /*
Daniel Cobb
SDI Section 01
Conditionals Assignment
September 2013, 2015
 */

//alert("test")
//Explain to the user what we are doing and get their name.
var user = prompt("We are going to calculate the weight of your truck\nFirst off, what's your name?");
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
//Check if truck weight is in lbs
var truckCheck = truckEmpty.length;
//Check if truck weight contains only numbers
var truckLbs = (/^[0-9]+$/.test(truckEmpty));
//Ensure truck weight is in lbs, greater than 999 and is only numbers
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
//Set ton to lbs
var lbs = parseInt(loadWeight)*2000;
console.log(loadWeight + " tons is " + lbs + " lbs.")
//Get total truck weight by combining empty weight and load weight
var truckTotal = parseInt(truckEmpty) + parseInt(lbs);
console.log(truckTotal + " lbs is the total weight of the truck");
