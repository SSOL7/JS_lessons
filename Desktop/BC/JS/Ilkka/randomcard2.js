'use strict';

const suite = Math.floor(Math.random()*4);
const rank = Math.floor(Math.random()*13)+1;

let suite_symbol;

switch(suite){
    case 0:
        suite_symbol = `\u2665`;
        break;
    case 1:
        suite_symbol = `\u2666`;
        break;
    case 2:
        suite_symbol = `\u2663`;
        break;
    case 3:
        suite_symbol = `\u2660`;
        default:
}


console.log(`RAndom number ${suite} ${rank}`);

