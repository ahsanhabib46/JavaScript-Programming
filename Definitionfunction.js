// // function hello()
// // {
// //     console.log("Hello there");
// // }

// // hello();

// // for(let i=0;i<20;i++)
// // {
// //     hello();
// // }
// //sum of two numbers
//using function expression

const sum =function (num1,num2){
    let sum =0;
    sum = num1+num2;
    return sum;
}
const returnedSum=sum(78,23);
console.log("The Sum of Two Number is = ",returnedSum);



// //even odd using arrow function
// const isEven= (number)=>{
//     if(number % 2 === 0){
//         let num="even";
//         return num;
//     }
//     else{
//         let num="Odd";
//         return num;
//     }
// }
const isEven=number=>number %2===0;
const retNum =isEven(5);
console.log("The number is even if true otherwise odd =",retNum);


// //string first character
// function firstChar(anyString){
//     return anyString[0];
// }
// console.log("The first character of the string is = ", firstChar("Ahsan"));

