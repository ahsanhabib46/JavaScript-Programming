//cloning using Object.assign({},which object wants to clone)

const obj={
    key1:"Value1",
    key2:"Value2"
};
//using spread operator
//const obj2={...obj};

//clone using Object.assign({},value)
const obj2=Object.assign({},obj);
obj.key3="Ahsan";
console.log(obj);
console.log(obj2);