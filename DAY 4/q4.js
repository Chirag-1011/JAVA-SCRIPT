function dc() {
    var dc11 = document.getElementById("dc1").value;
  
    if (dc11 >= 0 && dc11 <=90) {
      alert(`First Quadrant`);
    } 

    else if (dc11 >= 90 && dc11 <= 180) {
      alert(`Second Quadrant`);
    } 

    else if (dc11 >= 180 && dc11 <= 270) {
      alert(`Third Quadrant`);
    } 

    else if (dc11 >= 270 && dc11 <= 360) {
      alert(`Fourth Quadrant`);
    } 
  }
  