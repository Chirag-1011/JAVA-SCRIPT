function dc() {

    let n = document.getElementById("dcyt").value;


    let sum = 0;

    for (let d = 1; d <= n; d++) {


        if (d % 2 == 0) {

            sum = sum + d;
        }
    }

    document.getElementById("result").innerText = `${sum}`;

}