var moviname = document.querySelector("#data")
var type = document.querySelector("#filter")

document.querySelector("#data").addEventListener("input", () => {

    if(moviname.value)
    {
        data(moviname.value)
    }

})

document.querySelector("#goto").addEventListener("change", () => {
    if (type.value) {
        
        data(moviname.value,type.value)
    }
    // console.log(movietype.value);
    // console.log(movietype);
})

function data(movie,type="movie") {

    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=5a26bb36&s=${movie}&type=${type}`)
        .then((res) => {
            return res.json()
        }).then((r) => {
            if (r.Response == 'False') {
                console.log("nathi bhai");
            }
            else {
                document.querySelector("#box").innerHTML = view(r.Search)
                // console.log(r);
            }
        }).catch((err) => {
            console.log(err);
        })

}


function view(arr){
    return arr.map((Element)=>{
      return  `
        <div id="no1">
            <img id="image" src="${Element.Poster}" alt=""/>
            <div id="detail">
                <h1 id="titel">
                ${Element.Title}
                </h1>
                <p id="ty">
                    <span id="s">Type :</span> 
                    <span>${Element.Type}</span> 
                </p>
                <p id="ty">
                    <span id="s">Year :</span> 
                    <span>${Element.Year}</span> 
                </p>
            </div>
        </div>
    `
    }).join("")
}