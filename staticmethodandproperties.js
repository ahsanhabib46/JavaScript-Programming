class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    };
    //static method to call class directly
    static classInfo(){
        return `This is static`;
    }
    //static property 
    static prop="This is static property"
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
//use static to call class directly
console.log(Person.classInfo());
console.log(Person.prop);