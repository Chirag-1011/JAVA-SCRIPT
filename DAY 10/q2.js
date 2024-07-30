function dc() {

    let n = document.getElementById("dcyt").value;


    let sum = 1;

    for (let d = 1; d <= n; d++) {


        sum = sum * d;

    }
    document.getElementById("result").innerText = `${sum}`;

}