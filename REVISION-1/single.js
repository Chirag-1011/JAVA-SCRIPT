let data = new URLSearchParams(window.location.search)


let id = data.get("id")

fetch(`http://localhost:3000/product?id=${id}`)
    .then((Res) => {
        return Res.json()
    })
    .then((res) => {
        // console.log(res);

        document.querySelector("#box").innerHTML = view(res)
        
        document.querySelector("#loaddata").addEventListener("click", () => {

        fetch(`http://localhost:3000/cart?${res[0].id}`)
            .then((Res) => {
                return Res.json()
            })
            .then((res) => {

                console.log(res);
                

                if (res.length > 0) {
                    alert("revade lo")
                }
                else {

                        fetch(`http://localhost:3000/cart`, {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(res[0])
                        })
                            .then((Res) => {
                                return Res.json()
                            })
                            .then((res) => {
                                console.log(res)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                    
                })


    })
    .catch((err) => {
        console.log(err)
    })

function view(arr) {
    return arr.map((el) => {
        return `<div>
                         <img src="${el.image}" alt="">
                    </div>
                    <div>
                            <p>${el.title} --    ${el.price}</p>
                    </div>
                    
                    <button id="loaddata">ADD TO CART</button>
                    `
    })
}
