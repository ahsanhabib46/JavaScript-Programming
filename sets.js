//sets(it is iterables)
//store data
//sets also have its own methods
// No index-based access
// order not guaranteed
//unique items only(no duplicates allowed)

//set creation
const numbers=new Set([2,12,13,2,13,12]);
numbers.add(90);
numbers.add("Ahsan");
console.log(numbers);

//to get unique values from other array
const myArray=[2,12,13,2,13,12];
const uniqueElements=new Set(myArray);
console.log("Length is= ",myArray.length);
//to get length of set
let length=0
for(let element of uniqueElements){
    length++;
}
console.log("Unique elements are = ",uniqueElements);
console.log("The length of set is =",length);