
 /*
Daniel Cobb
SDI Section 01
Title
Date
 */

var name = prompt("Enter your name");
alert("Hello " + name);
var age = prompt("Enter your age");
var year = 2015;
var yearBorn = year - parseInt(age);
alert("You were born in " + yearBorn);
var user = [name, age, yearBorn];
console.log(user[0]);
console.log(user[2]);
console.log(user[1]);
var bye = "Thanks for visiting";
alert(bye);