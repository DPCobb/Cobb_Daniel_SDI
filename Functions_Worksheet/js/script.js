
/*
 Daniel Cobb
 SDI Section 01
 Functions Assignment
 September 22, 2015
 */

//alert("test");

//Circumference of a Circle
//C = 2(pi)(r)

//Set radius variable
var radius = prompt("Enter radius:");
//create function to return circumference
function circOfCircle(r){
    return circumference = 2 * 3.14 * r;
}
//Call circOfCircle
var ans = circOfCircle(radius);
//Log ans
console.log("The circumference of the circle is " + ans);

//Stung

//Set variables for weight and stings
var weight = prompt("Enter victim weight:");
var stings = 8.666666667;
//Set Function to calculate how many bee stings it would take to kill an animal
function totalStings(vicWeight, beeStings){
    return Math.round(beeStings * vicWeight);
}
//Call totalStings
var fatalStings = totalStings(weight, stings);
console.log("It takes " + fatalStings +" beestings to kill this animal.");