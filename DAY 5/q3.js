function dc(){

    let d = document.getElementById("a").value;

    if (d<1) {

       document.getElementById("age").innerHTML = `You Are : Infant`;
     
    }
    else if(d>=1 && d<=12){

        document.getElementById("age").innerHTML = `You Are : Child`;

    }
    else if(d>=13 && d<=19){

       document.getElementById("age").innerHTML = `You Are : Teenager`;
    }
    else if(d>=20 && d<=64){

       document.getElementById("age").innerHTML = `You Are : Adult`;
    }
    else{

       document.getElementById("age").innerHTML = `You Are : Senior Citizen`;

    }
}
