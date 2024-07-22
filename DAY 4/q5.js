function dc() {
    var dc11 = document.getElementById("dc1").value;

    var dc12 = document.getElementById("dc2").value;

    var dc13 = document.getElementById("dc3").value;
  
    if (dc11 == dc12 && dc11 == dc13) {
      alert(`Equilateral`);
    } 

    else if (dc11 == dc12 || dc11 == dc13 || dc12 == dc13) {
      alert(`Isosceles`);
    } 

   else{
    alert(`Scalene`);
   }
  }
  