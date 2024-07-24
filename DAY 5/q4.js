function dc(){

    let d = document.getElementById("a").value;

    if (d<0) {

       document.getElementById("age").innerHTML = `You Are : Ancient`;
     
    }
    else if(d>=1 && d<=1500){

        document.getElementById("age").innerHTML = `You Are : Medieval`;

    }
    else if(d>=1501 && d<=2024){

       document.getElementById("age").innerHTML = `You Are : Modern`;
    }
    else{

       document.getElementById("age").innerHTML = `You Are :  Future`;

    }
}
