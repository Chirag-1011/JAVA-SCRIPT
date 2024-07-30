function dc() {
    let a = document.getElementById("num").value;
  
    a > "A" && a < "Z"
      ? (document.getElementById("dcyt").innerText = "uppercase letter")
      : a > "a" && a < "z"
      ? (document.getElementById("dcyt").innerText = "lowercase letter")
      : a > "0" && a < "9"
      ? (document.getElementById("dcyt").innerText = "digit/number")
      : (document.getElementById("dcyt").innerText = "special character");            



  }