const carBrand={
    brandName:"volvo",
    modelName:"car",
    year:2013
};
//destruct using spread operator 
const{brandName:var1,modelName:var2,...newObject}=carBrand;

console.log(var1,var2,"\n",newObject);