//this program is for some ways to make function

//most common way
// function doubleIt(num){
//     return num*2;
// }

//another way is
// const doubleIt = function haveFun(num){
//     return num*2;
// }

// now the es6 version
const doubleIt = num => num*2;
const add = (x, y) => x+y;
const give = () => "give function called";

const bishal = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

console.log(add(5, 6));
console.log(give());
console.log(doubleIt(6));

console.log('calling multiline arrow function\n\n');
console.log(bishal(9, 6));