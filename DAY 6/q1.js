function dc(){
    let num= +document.getElementById("range1").value;
    let num1=+ document.getElementById("range2").value;
    let num2=+ document.getElementById("value").value;

    if(num2>=num && num2<=num1){

        document.getElementById("ans").innerText=True;
    }
    else{
        document.getElementById("ans").innerText=False;
    }
}