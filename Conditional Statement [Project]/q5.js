function dc() {
    let a = document.getElementById("num").value;
  
    a > 0
      ? (document.getElementById("dcyt").innerText = "positive")
      : a < 0
      ? (document.getElementById("dcyt").innerText = " negative")
      : (document.getElementById("dcyt").innerText = " zero");
  }