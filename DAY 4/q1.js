function dc() {
  var dc11 = document.getElementById("dc1").value;

  if (dc11 > 0) {
    alert(`${dc11} Is Positive`);
  } 
  
  else if (dc11 < 0) {
    alert(`${dc11} Is Negative`);
  } 
  
  else {
    alert(`${dc11} Is Zero`);
  }
}
