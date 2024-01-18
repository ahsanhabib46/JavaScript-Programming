// //another way to create object using Object.create(name of other object) this will create {} empty object

// const obj1={
//     key1:"value1",
//     key2:"value2"
// };

// const obj2=Object.create(obj1);
// obj2.key3="value3";
// //obj2.key2="Ahsan";
// //console.log(obj2.__proto__);
// console.log(obj.key2);


//__proto__ in object creation
//object inside function
function createUser(firstName,lastName,email,age,address){//Object.create() ,2 works ,empty object and create chain of object
    const user=Object.create(userMethods);
    //__proto__ is reference or address of other object
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;

    return user;

}

const userMethods={
    //here about () is method cause it is in object
    about(){
        return (`${this.firstName} is ${this.age} years old.`);
    },
    is18:function(){
        return this.age>=18;
    },
    hobby(){//it is method cause it is in object
        return "Football";
    }
};

//__proto__ works as reference of other object
const user1=createUser("Ahsan","Habib","ahsan@gmail.com",23,"Tanore Rajshahi");
console.log(user1);

console.log(user1.about());
console.log(user1.is18());
console.log(user1.hobby());


