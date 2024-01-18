//parameter destructuring
//used in object and react

const person={
    firstName:"Ahsan",
    age:23,
    gender:"male"
};

const printDetails=({firstName,age,gender})=>{
    console.log(firstName,age,gender);
}

printDetails(person);