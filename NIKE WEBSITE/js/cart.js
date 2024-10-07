fetch(`http://localhost:3000/cart`)
    .then((res)=>{
        return res.json()
    })
    .then((Res)=>{
        document.querySelector("#box").innerHTML = view(Res)
    })
    .catch((Err)=>{
        console.log(Err)
    })


    function view(arr){

return arr.map((el)=>{
    return `<div id="divv">
                <div>
                    <img src = "${el.img}"/>
                </div>
                <div>
                    <p id="title">${el.title}</p>
                    <p id="title1">${el.for}</p>
                    <p id="price">₹ ${el.MRP}</p>
                </div>
                <button onclick="dcyt(${el.id})" id="butt">DELETe</button>
            </div>`
}).join("")

}

function dcyt(id){


    fetch(`http://localhost:3000/cart/${id}`,{
        method:"DELETE",
    })
    .then((res)=>{
        return res.json();
    })

}
