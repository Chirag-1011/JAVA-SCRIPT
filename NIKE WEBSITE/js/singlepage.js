function FetchingData() {
    let data = new URLSearchParams(window.location.search)
    let id = data.get("id")
    fetch(`http://localhost:3000/product?id=${id}`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            document.querySelector("#boxx").innerHTML = view(res)
            document.querySelector("#butt").addEventListener("click", () => {
                addToCart(res)
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

function addToCart(res) {
    fetch(`http://localhost:3000/cart?id=${res[0].id}`)
        .then((res) => {
            return res.json()
        })
        .then((Res) => {
            if (Res.length > 0) {


                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "This Item Is Already Present!"
                  });


            } else {
                fetch(`http://localhost:3000/cart`, {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(res[0])
                })
                    .then((Res) => {
                        return Res.json()
                    })
                    .then((Res) => {
                        console.log(Res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })
        .catch((err) => {
            console.log(err)
        })

}


FetchingData()


function view(arr) {

    return arr.map((el) => {
        return `<div id="divv">
            <div>
                <img src = "${el.img}"/>
            </div>
            <div>
                <p id="title">${el.title}</p>
                <p id="title1">${el.for}</p>
                <p id="price">₹ ${el.MRP}</p>
            </div>
        </div>
        <button id="butt">Add To Cart</button>`
    }).join("")

}