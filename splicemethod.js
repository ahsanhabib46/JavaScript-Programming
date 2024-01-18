//splice method
//start delete insert
const myArr=[1,23,45,32,6,34,98];
//for deleting give returned value
//myArr.splice(1,1);

//for inserting
const deletedVal=myArr.splice(3,4,89);
console.log(deletedVal);
console.log(myArr);