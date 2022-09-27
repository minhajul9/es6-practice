const ages = [12,34,21,41];
const ages2 = [12,15,19,20,16];
const ages3 = [22,34,41,33];
//older system of array additions
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

const allAges2 = [ages, ages2, 5, ages3];
console.log(allAges2);
//new system ... is to spread all the elements
const allAges3 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges3);
const b = 650;
const c = 400;
const a = 123;
const result = Math.max(a, b, c);

//what if we want to find the maximum of an array
const arr = [450, 120, 650, 890];
// const result2 = Math.max(arr); it will not return the max value because we passed an array
// to get the max number we have speard the array using ... 
const result2 = Math.max(...arr);
console.log(result2);