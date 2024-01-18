//inheritance in class
//use of extends for class inheritance
class Animal{//parent class
    constructor(name,age){
        this.name=name;
        this.age=age;
    };
    eat(){
        return `${this.name} is eating`;
    }

    isCute(){
        return this.age<=1;
    }

    isSuperCute(){
        return true;
    }
};
//use of extends 
//child class
class Cat extends Animal{

};

//object creation with new keyword
const animal=new Cat("Tommy",3);
console.log(animal);
console.log(animal.age);
console.log(animal.eat());