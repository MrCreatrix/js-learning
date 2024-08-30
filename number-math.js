const score = 500;
// console.log(score);

// create number type
const balance = new Number(100);
// console.log(balance);

// convert string
// console.log(balance.toString().length);

// for decimal value
// console.log(balance.toFixed(2));

/**
 * toPrecision fun() retring total value based on passnumber it count include . also
 */
const number = 25.1253
// console.log(number.toPrecision(4));

/**
 * toLocaleString('en-IN') fun() retrun indian standard of price
 */
const amount = 1000000
amount.toLocaleString('en-IN')
// console.log(amount.toLocaleString('en-IN'));

/** ------------------------------------------- Maths ----------------------------- */

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(8.65));

// console.log(Math.ceil(8.65));

// console.log(Math.floor(8.65));

// console.log(Math.sqrt(8));


// console.log(Math.min(8,5,8,9,4,2,3));
// console.log(Math.max(8,5,8,9,4,2,3));

console.log(Math.random()*10);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
