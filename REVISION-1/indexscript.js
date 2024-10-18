
function fetchdata() {

    fetch(`http://localhost:3000/product`)
        .then((res) => {
            return res.json()
        })
        .then((Res) => {
            document.querySelector("#box").innerHTML = view(Res)
        })
        .catch((err) => {
            console.log(err)
        })
}

function view(arr) {
    return arr.map((el) => {
        return `<a href="single.html?id=${el.id}"><div>
                     <img src="${el.image}" alt="">
                </div>
                <div>
                        <p>${el.title} --    ${el.price}</p>
                </div></a>`
    })
}








fetchdata()