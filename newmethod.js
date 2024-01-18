//new method which creates empty object and return this
//new keyword set the value for proto ===  prototype of the function 
//create {} object 
//this ={} empty object
//return {} empty object
//constructor function use capital letter after new keyword
function CreateUser(firstName,lastName,email,age,address){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
        //here this={} empty object will be returned

}

CreateUser.prototype.about= function(){
        return (`MD. ${this.firstName} ${this.lastName} and i am ${this.age} years old.`);
    }
CreateUser.prototype.is18=function(){
        return this.age>=18;
    }
CreateUser.prototype.hobby=function(){
        return "Football";
    }
//use capital letter for constructor function for later developers to know that here new keyword is used
const user1=new CreateUser("Ahsan","Habib","ahsan@gmail.com",23,"Tanore Rajshahi");

console.log(user1);

console.log("I am ",user1.about());
console.log("My age is = ",user1.is18());
console.log("My hobby is ",user1.hobby());

//printing key of user not the prototype keys
console.log("\nKey for the users are :",);
for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    };
}