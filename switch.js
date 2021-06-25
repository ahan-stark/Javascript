function caseinswitch(val)
{
    var answer="";
    switch(val)
    {
        case 1:
            answer="Beta";
            break;
        case 2:
            answer="Alpha";
            break;
        case 3:
            answer="Gamma";
            break;
        case 4:
            answer="Delta";
            break;
        default:
            answer="Invalid";
            break;
    }
    return answer;
}
console.log(caseinswitch(3,1));