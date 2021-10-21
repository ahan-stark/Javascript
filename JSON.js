let text =
  '{ "employees" : [' +
  '{ "firstName":"Steve" , "lastName":"Rogers" },' +
  '{ "firstName":"Tony" , "lastName":"Stark" },' +
  '{ "firstName":"Peter" , "lastName":"Parker" } ]}';

const obj = JSON.parse(text);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);
