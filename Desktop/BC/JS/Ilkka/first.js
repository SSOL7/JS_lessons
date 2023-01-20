"use strict";

const suite = 'x';
let suite_symbol = '?';

// ternary operator to set the suite symbol
const result = suite === `` ? suite_symbol=`\u2665` : suite_symbol=`\u2660 this is not a heart`;

console.log(`I am in the ${suite} suite`);
console.log(`The suite symbol is ${suite_symbol}`);

