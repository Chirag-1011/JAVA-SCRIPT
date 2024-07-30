function dc() {
    a = document.getElementById("dcyt").value;
    let dc1="";


    for (let x = 1; x <= a; x++) {
        if (x % 3 == 0 && x % 5 == 0) {
            dc1 += x+ "fizzbuzz<br>";
            document.getElementById("ans").innerHTML = `${dc1}`;
     
        }
        else if (x % 3 == 0) {
            dc1 += x+ "fizz<br>";
            document.getElementById("ans").innerHTML = `${dc1}`;
          
        }
        else if (x % 5 == 0) {
            dc1 += x+ "buzz<br>";
            document.getElementById("ans").innerHTML = `${dc1}`;
      
        }
        
    }
}