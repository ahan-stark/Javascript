let a=10;
let b=10;
let ans=0;
console.log(r=add(a,b));
function add(a,b){
    if(b==0)
    return a;
    else
   ans=add(a,b-1)+1;
   return ans;
}
