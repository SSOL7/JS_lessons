`use strict`;

for (let i = 0; i < 10; i++) {
    console.log(`i is ${i}`);
}


let n=0;
for(;n<6;n+=2){
    console.log(`n is ${n}`);
}

let k = 0;
for(;k<6;){
    console.log(`k is ${k}`);
    k++;
}

let m = 0;
while(m<6){
    console.log(`m is ${m}`);
    m++;
}

function has_number() {
    return Math.random() < 0.1;
}

while(has_number()){
    console.log(`we got a number`);
}

let result = 0;
for(let i = 0; i < 5; i++){
    for(let column = 0; column < 5; column++){
        result += i*column;
        console.log('i is ' + i + ' column is ' + column);
    }
    result += `\n`;
}
console.log(result);

