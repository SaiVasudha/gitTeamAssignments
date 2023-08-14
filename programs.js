//this file contains logical programs ragarding numbers....
/**
 * 
 * @param {a} number 
 * @param {b} number
 * @returns return even number
 */
function isEven(number) {
  return number % 2 === 0;
}

let a = 6;
let b = 9;

if (isEven(a)) {
  console.log(`${a} is even.`);
} else {
  console.log(`${a} is not even.`);
}

if (isEven(b)) {
  console.log(`${b} is even.`);
} else {
  console.log(`${b} is not even.`);
}
