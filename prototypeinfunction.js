//function gives us free space means an empty object{}
//only functions provides prototype properties means an empty object which we can use 
function createUser(firstName,lastName,email,age,address){//Object.create() ,2 works ,empty object and create chain of object
    const user=Object.create(createUser.prototype);
    //__proto__ is reference or address of other object
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;

    return user;

}

createUser.prototype.about= function(){
        return (`MD. ${this.firstName} ${this.lastName} and i am ${this.age} years old.`);
    }
    createUser.prototype.is18=function(){
        return this.age>=18;
    }
    createUser.prototype.hobby=function(){
        return "Football";
    }

//__proto__ works as reference of other object
const user1=createUser("Ahsan","Habib","ahsan@gmail.com",23,"Tanore Rajshahi");
console.log(user1);

console.log("I am ",user1.about());
console.log("My age is = ",user1.is18());
console.log("My hobby is ",user1.hobby());
