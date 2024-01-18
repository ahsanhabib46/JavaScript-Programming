//spread operator
const obj1={
    k1:"val1",
    k2:"val2"
}

const obj2={
    k3:"val3",
    k4:"val4"
}

const newObject={...obj1,...obj2,k5:"val5"};

const newObject2={...[newObject]};
//const newObject={..."ahsan"};//we can spread 
console.log(newObject2);