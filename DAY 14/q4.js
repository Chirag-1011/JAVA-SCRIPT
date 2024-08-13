function calculateFactorial(num) {


    let fact = 1;

    for (let a = 1; a <= num; a++) {

        fact = fact * a;

    }

    return fact;
}

console.log(calculateFactorial(5));