
 /*
Daniel Cobb
SDI Section 01
Conditionals Assignment
September 2013, 2015
 */

//alert("test")
//Explain to the user what we are doing and get their name.
var user = prompt("We are going to calculate the weight of your truck\nFirst off, what's your name?");
console.log(user + " is the current user.");
//Ask the user for the weight of their unloaded truck
var truckEmpty = prompt(user + " what is the weight of your truck while empty?");
console.log(user + "'s truck weighs " + truckEmpty + " lbs while empty");
//Ask the user for the weight of their load
var loadWeight = prompt(user + " what is the weight of the load you will be carrying in tons?");
//check loadWeight is tons and not lbs
var loadCheck = loadWeight.length;
(loadCheck > 2) ?  loadWeight = prompt(user + " please re enter the weight of your load in tons") : console.log("Weight ok");
console.log(user + " will be carrying " + loadWeight + "tons");
//Set ton to lbs
var lbs = parseInt(loadWeight)*2000;
console.log(loadWeight + " tons is " + lbs + " lbs.")
//Get total truck weight by combining empty weight and load weight
var truckTotal = parseInt(truckEmpty) + parseInt(lbs);
console.log(truckTotal + " lbs is the total weight of the truck");
