'use strict';

const suite = Math.floor(Math.random()*4);
const rank = Math.floor(Math.random()*13)+1;

console.log(`RAndom number ${suite}`);

let suite_symbol;

if(suite === 0){
    suite_symbol = `\u2665`;
} else if (suite === 1){
    suite_symbol = `\u2666`;
} else if (suite === 2){
    suite_symbol = `\u2663`;
} else {
    suite_symbol = `\u2660`;
}

console.log(`symbol is ${suite_symbol} number is ${rank}`);