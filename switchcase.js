//for weekdays
let days=+prompt("Enter the values from 0 to 6");

switch(days){
    case 0 :
        console.log("Saturday");
        break;
    case 1 :
        console.log("Sunday");
        break;
    case 2 :
        console.log("Monday");
        break;
    case 3 :
        console.log("Tuesday");
        break;
    case 4 :
        console.log("Wednesday");
        break;
    case 5 :
        console.log("Thursday");
        break;
    case 6 :
        console.log("Friday");
        break;
    default: console.log("Invalid weekdays");
    

}