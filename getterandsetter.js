//get method to use class method as property

//set method to set changed name or something in the class using split("")

class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    };

    //get 
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(a){
        //destructuring
        const [firstName,lastName]=a.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
};

//creating object

const person1=new Person("Ah","HA",20);
console.log(person1);
person1.fullName="Ahsan Habib";
console.log(person1.fullName);