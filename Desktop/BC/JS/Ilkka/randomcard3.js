`use strict`;

const suite = Math.floor(Math.random()*4);
const rank = Math.floor(Math.random()*13)+1;

let suite_symbol;

console.log(`RAndom number ${suiteSymbol(2)}`);
console.log(`RAndom number ${suiteSymbol(2)}`);
console.log(`RAndom number ${suiteSymbol(2)}`);
console.log(`RAndom number ${suiteSymbol(2)}`);

function suiteSymbol(suite){
    switch(suite){
        case 0: return `\u2665`;
        case 1: return `\u2666`;
        case 2: return `\u2663`;
        case 3: return `\u2660`;
    }
}



