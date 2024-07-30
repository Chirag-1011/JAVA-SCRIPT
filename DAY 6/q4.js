function dc() {

    let press = document.getElementById("choice").value;
    let  dc = +document.getElementById("d").value;

    let  ans;

    if (press == 'c' || "C") {


        ans = (dc - 32) * 5 / 9;
        document.getElementById("ans").innerText = `Celsius =${ans}`

    }
    else if (press == 'f' || 'F') {

        ans = (dc * (9 / 5)) + 32;

        document.getElementById("ans").innerText = `Fahrenheit =${ans}`

    }
    else{
        document.getElementById("ans").innerText = `INvalid Choice`

    }

}