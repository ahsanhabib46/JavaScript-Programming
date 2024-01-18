//filter method in array
//for even and odd number
const numbers=[2,3,2,1,43,54];

const evenNum=numbers.filter((num)=>{
    return num%2===0;
});

console.log("The even number list =",evenNum);
//for odd number
const oddNum=numbers.filter((num)=>{
    return num%2!==0;
});

console.log("The odd number list =",oddNum);