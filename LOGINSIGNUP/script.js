
document.querySelector("#signupsub").addEventListener("click", () => {

    let username = document.querySelector("#user").value;
    let emailID = document.querySelector("#email").value;
    let passWord = document.querySelector("#pass").value;

    let obj = {
        user : username,
        email : emailID,
        pass : passWord
    }



    fetch(`http://localhost:3000/data`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then((res) => {
            return res.json()
        })
        .then((Res) => {
            console.log(Res)
        })
        .catch((err) => {
            console.log(err)
        })


})

