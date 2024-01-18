// typeof operator 
"use strict";
let myName = "Ahsan";
let age = 23 ;

console.log("Typeof the variable is =",typeof myName);
console.log("The type of variable age is =",typeof age);
//convert number to string
//age = age + "";
age = String(age);
console.log("Line 10 it is a =", typeof age);

//convert string to number
//let toNumber = +myName;
let toNumber=Number(myName);
console.log("After conversion :")
console.log("It is a = ",typeof toNumber);