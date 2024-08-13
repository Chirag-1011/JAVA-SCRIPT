function isPrime() {

    let count = 0;

    let dcyt =100;

    for(let x=1; x<=isPrime; x++)
    {
         console.log(isPrime(x));
        
    }

    for (a = 1; a <= dcyt; a++) {


        for(let dc = 1 ; dc <= 100 ; dc++)
        {
            if (dc%a == 0) {

                count++;

            }
        }
    }
    if(count == 2)
        {
            console.log(a);
        }
}
isPrime(100);
