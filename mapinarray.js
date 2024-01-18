//const numbers =[1,2,34,5,4];

// const square= (number,index)=>{
//     return (`index:${index} , number :${number*number}`);
// }

//map method returns value and we have to store that value in other variable

// const squareNumber=numbers.map((number,index)=>{
//     return (`index:${index} , number :${number*number}`);
// });
const users=[
    {firstName:"Ahsan",age:23,gender:"male"},
    {firstName:"Habib",age:23,gender:"male"},
    {firstName:"AH",age:23,gender:"male"}
];

const squareNumber=users.map((user)=>{
     return user.firstName;
});

console.log(squareNumber);