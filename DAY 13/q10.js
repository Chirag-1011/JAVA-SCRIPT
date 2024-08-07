function findFactorial(dc) {


    let sum = 1;

    for (let a = 1; a <= dc; a++) {

        sum = sum * a;
    }

    return sum


}


console.log(findFactorial(5));
