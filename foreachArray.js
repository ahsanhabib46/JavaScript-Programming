
//foreach(takes callback function) array methods
const numbers=[2,3,2,1,43,54];

// const myFun =(number,index)=>{
//     console.log(`The number is ${number} and the index is ${index}`);
// }
//it works as a loops 
// numbers.forEach(function(num,ind){
//     console.log(`The number is ${num}*2 =${num*2} and the index is ${ind}`);
// });

const users=[
    {firstName:"Ahsan",age:23,gender:"male"},
    {firstName:"Habib",age:23,gender:"male"},
    {firstName:"AH",age:23,gender:"male"}
];

// users.forEach(function(user){
//     console.log(user.firstName,user.age,user.gender);
// })
users.forEach((user,index,age)=>{
    console.log(user.firstName,user.age,user.gender,index,age);
})