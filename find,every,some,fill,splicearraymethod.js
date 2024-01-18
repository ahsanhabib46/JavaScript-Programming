//find()method
const myArray=["Hello","Hi","Bye","come"];

const isLength=myArray.find((string)=>string.length===4);
//console.log(isLength);

//find method in practical world
const users=[
    {userId:1,userName:"Ahsan",age:23,salary:105000},
    {userId:2,userName:"Habib",age:21,salary:109000},
    {userId:3,userName:"Ahs",age:20,salary:120000},
    {userId:4,userName:"san",age:25,salary:150000},
];

const isUser=users.find((user)=>user.userId===4);

//console.log(isUser);

//every()

// const numbers=[1,23,45,32,6,34,98];

//const isEven =numbers.every((number)=>number%2===0);
//console.log(isEven);
//every() method gives true or false value
const isHigh=users.every((a)=>a.salary>100000);
//console.log(isHigh);

//some() if any single value is correct then returns true otherwise false(if every value is same type)


const numbers=[1,23,45,32,6,34,98];
const isGreater =numbers.some((number)=>number>100);
//console.log(isGreater);


//fill()
//value ,start ,end

const myArr=new Array(10).fill(10);
console.log(myArr);

numbers.fill(12,2,4);
console.log(numbers);