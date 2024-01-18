const person ={
    name: "ahsan",
    age:23,
    "person hobbies":["reading","playing","coding"]

};

// for(let key in person){
//     // console.log(key ,":",person[key]);
//     console.log(`${key} : ${person[key]}`);
// }
//console.log(Object.keys(person));

for(let key of Object.keys(person)){
    console.log(person[key]);
}