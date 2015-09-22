
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

 //Set Function for input validation

 function inputValidation(data){
     var numVal = (/[a-z,A-Z]/.test(data))
     while (data == "" || data == numVal){
         if (data == ""){
             data = prompt("You cannot leave this blank, please re enter.");
         }
         else if (data == numVal) {
             data = prompt("This entry can only contain numbers, please re enter");
         }
     }
 }

 // Print user to console log
 console.log(user + " is the current user");
// Ask user for the information need for calculations and validate using inputValidation
 var startMiles = prompt(user + " please enter your starting mileage.");
 inputValidation(startMiles);

 var endMiles = prompt(user + " please enter your ending mileage.");
 inputValidation(endMiles);

 var startTime = prompt(user + " please enter what time you starting driving, rounded to the nearest hour in 24hr format");
 inputValidation(startTime);

 var endTime = prompt(user + " please enter what time you stopped driving, rounded to the nearest hour in 24hr format");
 inputValidation(endTime);

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

 //Call milesPerHour function
 var tripOutPut = milesPerHour(trip,hours);
 console.log(tripOutPut + " mph");

 //Set anon function to give final information to user

 var userInfo = function(totMiles, totHours, avgMPH, name){
     alert(name + " you drove a total of " + totMiles + " total miles over " + totHours + " total hours at an average of " + avgMPH + " miles driven per hour.");
 };

 //Call userInfo for final display of information

 userInfo(trip, hours,tripOutPut,user);


