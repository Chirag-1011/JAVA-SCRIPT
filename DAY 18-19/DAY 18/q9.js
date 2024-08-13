let ages = [10, 17, 26, 24, 30];

let older = 0;
for (let a = 0; a <= 4; a++) {

    if (ages[a] > 0) {
        older = ages[a];
    }
}

console.log(older);