function printmany(str)
{
    "use strict";

    const SENTENCE= str +"is cool!";
   //(wont assign beacuse of CONST) SENTENCE=str+"is amazing"
    for( let i=0; i<str.length;i+=2)
    {
        console.log(SENTENCE);
    }
}
printmany("freecodecamp ");