/* concatenation and cloning of array using different ways*/
let arr1 =["item1", "item2"];
//let arr2 =["item1", "item2"];
//slice() for cloning array 
let arr2=arr1.slice(0).concat(12,334,23,34);

//[].concat(arrayName) and add more items
// let arr2 =[].concat(arr1);
//let arr2 =[].concat(arr1,1,1,2,3,3);


//new way spread operator [...arrayName]
// let arr2 =[...arr1];
//let arr2 =[...arr1,1,2,3,4,3];//for add new items

arr1.push("Item3");
console.log(arr1===arr2);
console.log(arr1);
console.log(arr2);