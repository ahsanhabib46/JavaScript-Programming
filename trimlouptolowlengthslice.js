
 let firstName = "    Ahsan Habib   ";
 console.log("My name is =",firstName)

 console.log("The length of the string is = ",firstName.length);
// //for removing space from string using trim()
firstName = firstName.trim();

console.log("The length of trimmed string is =",firstName.length);
console.log("After trimming =",firstName)

firstName = firstName.toUpperCase();
console.log("Upper case of my name is =",firstName);
// console.log(firstName);

 firstName = firstName.toLowerCase();

 console.log("Lower case of my name is =",firstName);

// //slice() method

 firstName = firstName.slice(4,5);//slice from length
console.log(firstName);
console.log(firstName.length);
