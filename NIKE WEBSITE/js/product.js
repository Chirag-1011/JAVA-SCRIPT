fetch(`https://online-api-2.onrender.com/product`)
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
        return `<a id="pr" href ="singlepage.html?id=${el.id}"><div id="divv">
                    <div>
                        <img class="image" src = "${el.img}"/>
                    </div>
                    <div>
                        <p id="title">${el.title}</p>
                        <p id="title1">${el.for}</p>
                        <p id="price">₹ ${el.MRP}</p>
                    </div>
                </div></a>`
    }).join("")

}