function dc(){

    let d = document.getElementById("a").value;

    if (d<=100) {
        
       let bill = d*0.1;

       document.getElementById("TotalBill").innerHTML = `Your monthly electricity Bill : ${bill}`;
     
    }
    else if(d>=101 && d<=200){

        let bill = d*0.15;

        document.getElementById("TotalBill").innerHTML = `Your monthly electricity Bill : ${bill}`;

    }
    else if(d>=201 && d<=300){

        let bill = d*0.2;

        document.getElementById("TotalBill").innerHTML = `Your monthly electricity Bill : ${bill}`;
    }
    else{

        let bill = d*0.25;

        document.getElementById("TotalBill").innerHTML = `Your monthly electricity Bill : ${bill}`;

    }
}
