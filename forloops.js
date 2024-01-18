let num=11;sum=0;
for(let i=0;i<=10;i++)//let block scoped
{
    //sum+=i;
    if(i===8)
    {
        continue;
    }
    else if(i===9){
        break;
    }
    console.log("The number is = ",i);
    sum=sum+i;
}
console.log(`The value of sum is= ${sum}`);

