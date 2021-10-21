let str = "hey there! ,how are you?";
let newstr = "";
let newstr2 = "";
newstr = str.slice(12, 24); //slice method, parameters used start and end
console.log(newstr);
newstr2 = str.slice(-24, -15);
console.log(newstr2);
let substring3 = "";
substring3 = str.substring(0, 10); //substring method parameters used start and end
console.log(substring3);
let substr4 = "";
substr4 = str.substr(12, 12); //substr method parameters used start and length
console.log(substr4);
