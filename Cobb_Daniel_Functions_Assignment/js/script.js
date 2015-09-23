
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

 /*
 Check if the user name is not empty and is only letters
 Looks for empty user field and tests if user is only letters
 If empty or contains numbers then ask the user to re enter name and reset userValid check
 */

 while (user =="" || userValid == true){
     user = prompt("Please enter your name");
     userValid = (/[0-9]/.test(user));
 }

 /*
 Set Function for input validation. Set up numVal which checks to see if data is a number.
 Feeds data into a while loop to check if empty or is not a number. Result is put through a conditional
 to select output based on which condition was true.
  */

 function inputValidation(data){
     var numTest = parseInt(data);
     var numVal = isNaN(numTest);
     while (data == "" || numVal == true){
         if (data == ""){
             data = prompt("You cannot leave this blank, please re enter.");
         }
         else {
             data = prompt("This entry can only contain numbers, please re enter");
             numTest = parseInt(data);
             numVal = isNaN(numTest);
         }
     }
     return data;
 }

 // Print user to console log
 console.log(user + " is the current user");
// Ask user for the information need for calculations and validate using inputValidation
 var startMiles = prompt(user + " please enter your starting mileage.");
 startMiles = inputValidation(startMiles);
 console.log( user + "'s starting mileage was " + startMiles + ".");

 var endMiles = prompt(user + " please enter your ending mileage.");
 endMiles = inputValidation(endMiles);
 console.log( user + "'s ending mileage was " + endMiles + ".");

 var startTime = prompt(user + " please enter what time you starting driving, rounded to the nearest hour in 24hr format");
 startTime = inputValidation(startTime);
 console.log( user + " started driving at " + startTime + ".");

 var endTime = prompt(user + " please enter what time you stopped driving, rounded to the nearest hour in 24hr format");
 endTime = inputValidation(endTime);
 console.log( user + " stopped driving at " + endTime + ".");

 //Set Function for total mile computation

 function totalMiles(start, end){
     var mileTotal = end - start;
     return mileTotal;
 }

 //Call Function to calculate total miles and display results in console.log

 var trip = totalMiles(startMiles, endMiles);
 console.log(user + "'s trip was a total of " + trip + " miles.");

 //Set Function to calculate total hours driven

 function totalHours(clockIn, clockOut){
     var hoursTotal = clockOut - clockIn;
     return hoursTotal;
 }

 //Call Function to calculate total hours driven

 var hours = totalHours(startTime, endTime);
 console.log( user + "'s total drive time was " + hours + " hours.");

 //Set Anon Function to calculate average miles driven each hour

 var milesPerHour = function(miles, hour){
     var avgMiles = Math.round(Number(miles) / Number(hour));
     return avgMiles;
 };

 //Call milesPerHour function
 var tripOutPut = milesPerHour(trip,hours);
 console.log( user + " drove on average " + tripOutPut + " miles each hour.");

 //Set anon function to give final information to user

 var userInfo = function(totMiles, totHours, avgMPH, name){
     var out = name + " you drove a total of " + totMiles + " total miles over " + totHours + " total hours at an average of " + avgMPH + " miles driven per hour.";
     return out;
 };

 //Call userInfo for final display of information

 var finalOutput = userInfo(trip, hours,tripOutPut,user);
 alert(finalOutput);
 console.log(finalOutput);


