//sort method 
const numbers=[2,3,2,1,43,54];
numbers.sort((a,b)=>{
    return a-b;
});

console.log("The numbers in ascending order =",numbers)

numbers.sort((a,b)=>{
    return b-a;
});

console.log("The numbers in descending order =",numbers)

const userNames=["AHSAN","HAbib","AH"];

userNames.sort();
console.log(userNames);

const users=[
    {firstName:"Ahsan",age:23,gender:"male",salary:23424},
    {firstName:"Habib",age:23,gender:"male",salary:235242},
    {firstName:"AH",age:23,gender:"male",salary:29545}
];
//for low to high sorting
const lowToHigh=users.slice(0).sort((a,b)=>{
     return a.salary-b.salary ;
});

console.log("ascending salary is = ",lowToHigh);

//for high to low sorting

const highToLow=users.slice(0).sort((a,b)=>{
    return b.salary-a.salary ;
});

console.log("ascending salary is = ",highToLow);