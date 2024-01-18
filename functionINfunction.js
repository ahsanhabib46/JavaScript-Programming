//function inside function

function app(){
    const myFun=()=>{
        console.log("Hello There");
    }
    const addTwoNum=(num1,num2)=>{
        return num1+num2;
    }
    const mul=(num1,num2,num3)=>{
        return num1*num2*num3;
    }

    console.log("Inside App");
    myFun();
    console.log(mul(5,4,3));
}

app();