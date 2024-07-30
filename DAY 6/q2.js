function dc() {

    let dd1 = +document.getElementById("amount").value;

    let dd2 = +document.getElementById("year").value;

    if (dd1 < 1000) {

        let interest = (dd1*5*dd2)/100  

        document.getElementById("interest").innerText = `5% interest : ${interest}`;

        document.getElementById("total").innerText = `total : ${interest+dd1}`;
    }
    else if(dd1>1000 && dd1<=5000)
    {
        let interest = (dd1*7*dd2)/100  

        document.getElementById("interest").innerText = `7% interest : ${interest}`;

        document.getElementById("total").innerText = `total : ${interest+dd1}`;
    }
    else{
        let interest = (dd1*10*dd2)/100  

        document.getElementById("interest").innerText = `10% interest : ${interest}`;

        document.getElementById("total").innerText = `total : ${interest+dd1}`;
    }

}