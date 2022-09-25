const firstName = "Justin";
const lastName = "TimberLake";
//normal way
const fullName = firstName + " " + lastName + " is a good boy";

//now the es6 way
const fullName2 = `${firstName} ${lastName} is a good boy`;

console.log(fullName);
console.log(fullName2);

//new line older system
const multiline = "older system \nI love you \nI miss you \nI need you";
console.log(multiline);

const multiline2 = `
new system 
I love you 
I miss you 
I need you`;
console.log(multiline2);