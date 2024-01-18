// //maps object

// const person = new Map();

// //set()
// person.set("firstName","Ahsan");
// person.set("age",23);
// person.set("gender","male");

// //get()
// console.log(person.get("age"));

// //keys()
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key);
// }
// //to get the key:value pairs
// for(let key of person){
//     console.log(key);
// }

// //we can use array destructure
// for(let [key,value ]of person){
//     console.log(key,":",value);
// }


const person1={
    id:1,
    firstName:"Ahsan"
}
const person2={
    id:2,
    firstName:"Habib"
}

const extraInfo=new Map();
extraInfo.set(person1,{age:23,gender:"male"})
extraInfo.set(person2,{age:20,gender:"male"})

console.log(extraInfo.get(person1).age);