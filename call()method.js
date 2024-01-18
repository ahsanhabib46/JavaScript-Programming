// //call() to borrow function from other object
// const about=function(hobby,favGame){
//     console.log(this.id,this.firstName,hobby,favGame)
// }
// const person1={
//     id:1,
//     firstName:"Ahsan",
//     age:22,
    
// };
// const person2={
//     id:2,
//     firstName:"Habib",
//     age:23,
    
// };
// //call()
// //about.call(person1,"coding","coding");

// //apply() takes array in its 
// about.apply(person1,["coding","coding"]);


// //bind() it returns a function and we can call that function

// const retFun=about.bind(person2,"coding","coding");
// retFun();


const person1={
        id:1,
        firstName:"Ahsan",
        age:22,
        about(hobby){
            console.log(this.id,this.firstName,this.age,hobby);
        }
        
    };

person1.about.call(person1,"football");