//class constructor (){} and class method(){};
class CreateUser{
    constructor(firstName,lastName,email,age,address){
        console.log("Iam called");
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;
    };
    about= function(){
        return (`MD. ${this.firstName} ${this.lastName} and i am ${this.age} years old.`);
    }
    is18=function(){
        return this.age>=18;
    }
    hobby=function(){
        return "Football";
    }
    fun(a){
        return a;
    }

};

//use capital letter for constructor function for later developers to know that here new keyword is used
//new keyword is must for class call
const user1=new CreateUser("Ahsan","Habib","ahsan@gmail.com",23,"Tanore Rajshahi");

console.log(user1);
console.log(user1.fun("ahsan"));

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