function dc() {
  var dc11 = document.getElementById("dc1").value;

  if (dc11 >= 90) {
    alert(`you got grade A`);
  } 
  else if (dc11 >= 80 && dc11 <= 89) {
    alert(`you got grade B`);
  } 
  else if (dc11 >= 70 && dc11 <= 79) {
    alert(`you got grade C`);
  } 
  else if (dc11 >= 60 && dc11 <= 69) {
    alert(`you got grade D`);
  } 
  else {
    alert(`you got grade F`);
  }
}
