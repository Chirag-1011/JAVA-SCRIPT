function isPrime(number) {

    let count = 0;
    for (a = 1; a <= number; a++) {


        if (number%a == 0) {

            count++;

        }

    }
    if(count == 2)
        {
            count++;
        }
    return count;
   
}
console.log(isPrime(50));