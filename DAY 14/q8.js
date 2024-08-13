function isPrime(number) {

    let count = 0;
    for (a = 1; a <= number; a++) {

        if (a%2 == 0) {
            count++;
        }
    }
    return count;
   
}
console.log(isPrime(100));