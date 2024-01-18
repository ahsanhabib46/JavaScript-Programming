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
        constructor(name,age,speed){
            super(name,age);
            this.speed=speed;
        }

    eat(){
        return `${this.name} is sleeping`
    }    
    run(){
        return `${this.name} is running at ${this.speed} kmph`
    }    

};

//object creation with new keyword
const animal=new Cat("Tommy",3,20);
console.log(animal);
console.log(animal.age);
//first see own class method then parent class
console.log(animal.eat());
console.log(animal.run());