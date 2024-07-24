function dc(){

    let d = document.getElementById("a").value;

    if (d<=100) {
        

       document.getElementById("amount").innerHTML = `Your yearly income : ${d}`;

       document.getElementById("discount").innerHTML = `You got 0% discount`;

       document.getElementById("total").innerHTML = `Total yearly income : ${d}`;
     
    }
    else if(d>=101 && d<=500){

        let discount = (d*5)/100;

       document.getElementById("amount").innerHTML = `Your yearly income : ${d}`;

       document.getElementById("discount").innerHTML = `You got 5% discount : ${discount}`;

       document.getElementById("total").innerHTML = `Total yearly income : ${d-discount}`;
    }
    else if(d>=501 && d<=1000){

        let discount = (d*10)/100;

       document.getElementById("amount").innerHTML = `Your yearly income : ${d}`;

       document.getElementById("discount").innerHTML = `You got 10% discount : ${discount}`;

       document.getElementById("total").innerHTML = `Total yearly income : ${d-discount}`;
    }
    else{

        let discount = (d*15)/100;

        document.getElementById("amount").innerHTML = `Your yearly income : ${d}`;
 
        document.getElementById("discount").innerHTML = `You got 15% discount : ${discount}`;
 
        document.getElementById("total").innerHTML = `Total yearly income : ${d-discount}`;
    }
}
