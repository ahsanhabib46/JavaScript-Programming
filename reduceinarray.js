// const numbers=[2,3,2,1,43,54];
// //accumulator will be first value and the return value and the currentValue will be the next one

// const reduceNum=numbers.reduce((num,num2)=>{
//     return num+num2;
// },20);//we can also initialize the accumulator value

// console.log(reduceNum)

const users=[
    {firstName:"Ahsan",age:23,gender:"male",salary:23424},
    {firstName:"Habib",age:23,gender:"male",salary:235242},
    {firstName:"AH",age:23,gender:"male",salary:29545}
];

const totalSalary=users.reduce((totalSalary,currentJob)=>{
     return totalSalary+currentJob.salary ;
},0);

console.log("Total Sum of the salary is = ",totalSalary);