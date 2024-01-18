//function returns functions
function myFun(a){
    function myFun2(name){
        console.log("Inside my Fun 2");
        console.log(name);
        return name;
    }
    console.log(a);
    return myFun2;
}

const ans = myFun("Ahsan");//passing parameter
const retVal=ans(5);//passing parameter to returned function
console.log("The returned function value is = ",retVal);