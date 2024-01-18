function myFun(callback){
    console.log("Hello There");
    callback("Ahsan");
}

function myFun2(name){
    console.log("Inside my Fun 2");
    console.log(name);
}

myFun(myFun2);