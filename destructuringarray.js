const myArray=["value1","value2","value3","value4"];
//slice()method
let[myvar1,myvar2]=myArray;
let newArray=[];
newArray=myArray.slice(2);
//to create separate variable and array
//can skipped value using comma(,)
//spread operator 
//let [myvar1,,myvar2,...newArray]=myArray;
console.log(myvar1);
console.log(myvar2);
console.log(newArray);