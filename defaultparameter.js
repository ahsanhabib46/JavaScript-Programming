//default parameter
// function addTwo(num1,num2=0){
//     return num1+num2;
// }

// const ans= addTwo(5);
// console.log("The sum is = ",ans);

//rest parameter

function addTwo(...num1){
    let total=0;
    for(let num of num1){
        total = total + num;
    }
    return total;
}

const ans= addTwo(5,3,55,43,2,42,2,1,4);
console.log("The sum is = ",ans);