function checksign(num)
{
    return num>0 ? "positive" : num<0 ? "negative" :"zero";
}
console.log(checksign(20))