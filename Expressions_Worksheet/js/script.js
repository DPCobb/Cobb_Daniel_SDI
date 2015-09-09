
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

// Average Shopping Bill
 // Set grocery bill amounts
 var bill = [100, 130, 95, 125, 75];
 // Add bill totals
 var billTot = bill[0] + bill[1] + bill[2] + bill[3] + bill[4];
 console.log(billTot + " total on groceries over 5 weeks");
 // Divide bill totals by 5 to get average
 billAvg = billTot / 5;
 console.log(billAvg + " average bill");
 // Display results
 alert("You spent $" + billTot + " on groceries over the last 5 weeks, this averages out to $" + billAvg + " per trip");

//Discounts
 //Ask for original price
 var price = prompt("Please enter the original price:");
 console.log(price + " original cost");
 //set discount of 25% 100 - 25 = 75% of original cost
 var discPer = 25;
 var discPrice = .75;
 // Set sales tax
 var saleTax = .07;
 //Calculate price w/o sales tax
 var totalNoTax = price * discPrice;
 console.log("Price with discount applied and no sales tax: $" + totalNoTax);
 //Calculate price w/tax
 var tax = totalNoTax * saleTax;
  var totalTax = tax + totalNoTax;
 console.log("Total cost with sales tax: $" + totalTax);
 // Display original cost, discount %, discounted price without sales tax, and discounted price with sales tax.
alert("Your item was originally $" + price + " with a " + discPer + "% discount it is now $" + totalNoTax + " without sales tax and $" + totalTax + " with sales tax.");

