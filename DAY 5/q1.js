function dc(){

    let d = document.getElementById("a").value;

    if (d<=10000) {
        
       let tax = (d*5)/100;

       document.getElementById("income").innerHTML = `Your yearly income : ${d}`;

       document.getElementById("tax").innerHTML = `Tax in yearly income : ${tax}`;

       document.getElementById("total").innerHTML = `Total yearly income : ${d-tax}`;
     
    }
    else if(d>=10001 && d<=50000){

        let tax = (d*10)/100;

       document.getElementById("income").innerHTML = `Your yearly income : ${d}`;

       document.getElementById("tax").innerHTML = `Tax in yearly income : ${tax}`;

       document.getElementById("total").innerHTML = `Total yearly income : ${d-tax}`;
    }
    else if(d>=50001 && d<=100000){

        let tax = (d*15)/100;

       document.getElementById("income").innerHTML = `Your yearly income : ${d}`;

       document.getElementById("tax").innerHTML = `Tax in yearly income : ${tax}`;

       document.getElementById("total").innerHTML = `Total yearly income : ${d-tax}`;
    }
    else{

        let tax = (d*20)/100;

        document.getElementById("income").innerHTML = `Your yearly income : ${d}`;
 
        document.getElementById("tax").innerHTML = `Tax in yearly income : ${tax}`;
 
        document.getElementById("total").innerHTML = `Total yearly income : ${d-tax}`;
    }
}
