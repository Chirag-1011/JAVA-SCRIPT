function dc() {
    

    let d = document.getElementById("a").value;

    if(d<30)
    {
        document.getElementById("temp").innerHTML = `Hot` ;
    }

    else if(d>=15 && d<=30)
    {
        document.getElementById("temp").innerHTML = `Moderate` ;
    }
    else if(d<15)
    {
        document.getElementById("temp").innerHTML = `Cold` ;
    }
    


}