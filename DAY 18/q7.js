let scores = [56, 86, 77];
let sum = 0;

let player = 0;

for (let a = 0; a <= 2; a++) {

    sum = sum + scores[a];

    player++
}

let average = sum / player;

console.log(average);