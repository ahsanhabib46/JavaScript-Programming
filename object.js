//objects reference type 
//arrays are good but not sufficient for real world data
//objects store key: value pairs
//objects don't have index

//object creation
const key ="email";
const person ={
    name: "ahsan",
    age:23,
    hobbies:["reading","playing","coding"]

};
person[key]="ahsanhabib@gmail.com";
//person["gender"]="male";
console.log(person);
//for access/insert member use dot(.) or [] notation
// console.log(person["name"]);
// console.log(person["hobbies"]);