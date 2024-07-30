function dc() {
    let a = document.getElementById("num").value;
  
    a % 3 == 0 && a % 5 == 0
      ? (document.getElementById("dcyt").innerText = "FizzBuzz")
      : a % 3 == 0
      ? (document.getElementById("dcyt").innerText = "Fizz")
      : a % 5 == 0
      ? (document.getElementById("dcyt").innerText = "Buzz")
      : "";
  }