function dc() {

    let dd1 = +document.getElementById("amount").value;


    if (dd1 < 500) {   

        let tax=(dd1*10)/100 ;

        document.getElementById("amount").innerText = `amount : ${dd1}`;

        document.getElementById("tax").innerText = `10% tax : ${tax}`;
        
        let charge = dd1+tax+50;

        document.getElementById("charge").innerText = `charge : ${charge}`;

        document.getElementById("total").innerText = `total bill : ${dd1+tax+charge}`;
      
    }
    else if(dd1>=500 && dd1<=1000)
    {
        let tax=(dd1*15)/100 ;

        document.getElementById("amount").innerText = `amount : ${dd1}`;

        document.getElementById("tax").innerText = `15% tax : ${tax}`;
        
        let charge = dd1+tax+50;

        document.getElementById("charge").innerText = `charge : ${charge}`;

        document.getElementById("total").innerText = `total bill : ${dd1+tax+charge}`;
    }
    else{
        let tax=(dd1*20)/100 ;

        document.getElementById("amount").innerText = `amount : ${dd1}`;

        document.getElementById("tax").innerText = `20% tax : ${tax}`;
        
        let charge = dd1+tax+50;

        document.getElementById("charge").innerText = `charge : ${charge}`;

        document.getElementById("total").innerText = `total bill : ${dd1+tax+charge}`;
    }



}