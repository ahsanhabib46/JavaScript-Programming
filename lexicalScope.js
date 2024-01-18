//lexical scope
//we can access value from anywhere in the program

//const myVar="Value1"

function myApp(){
    let myVar="Value1"

    function myFunc(){
        //const myVar="value 23"
        console.log("The value is = ", myVar);
    }
    console.log(myVar);
    myFunc();
}
myApp();
