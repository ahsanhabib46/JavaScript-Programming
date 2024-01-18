const fruits=["fru1","fru2","fru3","fru4"];
const fruits2=[];
for(let newFru of fruits){
    fruits2.push(newFru.toUpperCase());
}
console.log(fruits2);
for(let newFru in fruits){
    //console.log(fruits[newFru]);
    fruits2.push(newFru);
}

console.log(fruits2);