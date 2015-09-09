
 /*
Daniel Cobb
SDI Section 01
Expressions Work Sheet
9-9-15
 */

//alert("test")
// Dog Years
 // Set dog years to human year
var dogYears = 7;
 // Ask for Sparky's age in human years
var humanAge = prompt("Hi, let's figure out how old Sparky is.\nPlease enter how old Sparky is in human years:");
 // Calculate age in dog years
var sparkyAge = dogYears * humanAge;
 // Display information
console.log("Sparky is " + sparkyAge + " in dog years");
alert("Sparky is " + humanAge + " human years old which is " + sparkyAge + " in dog years.");

// Slice of the Pie part I
 // Set slices per pie
var slices = 8;
 // Ask for total guest count
var guests = prompt("Let's calculate how much pizza each guest will get.\nHow many guests are there?");
 // Ask for total pizza's ordered
var pizzas = prompt("How many pizzas did you order?");
 // Calculate slices per guest
var sliceEach = pizzas * slices / guests;
 // Display result
console.log("Each guest will get " + sliceEach + " slices.");
alert("Each guest will get " + sliceEach + " slices.");

//Slice of the Pie part II
 // Remember Sparky, guests only get full slices the rest go to Sparky
alert("Oops we can't forget about Sparky. Each guest can only eat a full slice, the left over goes to Sparky.");
 // Calculate how many slices Sparky gets using modulo
 var sliceSparky = pizzas * slices % guests;
 // Display results
 console.log("Sparky will get " + sliceSparky + " slices.");
 alert("Sparky will get " + sliceSparky + " slices.");

