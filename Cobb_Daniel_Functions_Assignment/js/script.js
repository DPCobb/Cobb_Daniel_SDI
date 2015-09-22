
 /*
Daniel Cobb
SDI Section 01
Functions Assignment
September 22, 2015
 */

//alert("test");

 //Collect information to calculate miles driven, hours driven, and average MPH
 //Ask user for name and explain purpose
 var user = prompt("We are going to calculate the length in miles and hours and the average miles driven per hour for your trip.\nFirst, what is your name?");
 var userValid = (/[0-9]/.test(user));

 //Check if the user name is not empty and is only letters

 while (user =="" || userValid == true){
     user = prompt("Please enter your name");
     userValid = (/[0-9]/.test(user));
 }
 // Print user to console log
 console.log(user + " is the current user");
// Ask user for the information need for calculations
 var startMiles = prompt(user + " please enter your starting mileage.");
 var endMiles = prompt(user + " please enter your ending mileage.");
 var startTime = prompt(user + " please enter what time you starting driving, rounded to the nearest hour in 24hr format");
 var endTime = prompt(user + " please enter what time you stopped driving, rounded to the nearest hour in 24hr format");

 //Set Function for total mile computation

 function totalMiles(start, end){
     var mileTotal = end - start;
     return mileTotal;
 }

 //Call Function to calculate total miles and display results in console.log

 var trip = totalMiles(startMiles, endMiles);
 console.log(trip);

 //Set Function to calculate total hours driven

 function totalHours(clockIn, clockOut){
     var hoursTotal = clockOut - clockIn;
     return hoursTotal;
 }

 //Call Function to calculate total hours driven

 var hours = totalHours(startTime, endTime);
 console.log(hours);

 //Set Anon Function to calculate average miles driven each hour

 var milesPerHour = function(miles, hour){
     var avgMiles = miles / hour;
     return avgMiles;
 };

 var tripOutPut = milesPerHour(trip,hours);
 console.log(tripOutPut + " mph");
