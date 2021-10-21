let num=5;
let ans=0;
ans=console.log(factorial(num))
function factorial(num){
    if (num==0 || num==1)
    return 1;
    else
     return (num*factorial(num-1));
}