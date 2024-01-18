//use after object ?. to get undefined and escape error

const user={
    firstName:"Ahsan",
    address:{houseNumber:"123",roadNumber:34}
};

console.log(user?.firstName);
console.log(user?.address?.houseNumber,user?.address.roadNumber);