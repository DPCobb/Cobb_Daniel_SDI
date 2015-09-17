/*
Daniel Cobb
SDI Section 01
Conditionals Worksheet
September 17, 2015
 */

//Stuff your face I

var weight = prompt("Please enter your weight so we can see if you qualify for the heavyweight division");
var weightMin = 250;

if(parseInt(weight)>=weightMin){
    alert("The competitor qualifies for the heavyweight division.");
    console.log("The competitor qualifies for the heavyweight division at " + weight + " lbs.");
}
else{
    alert("The competitor needs to gain some weight!");
    console.log("The competitor needs to gain some weight at " + weight + " lbs");
}