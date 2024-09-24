let dc ;

function stdd(){
    let hour = document.querySelector("#hour")
    let min = document.querySelector("#min")
    let second = document.querySelector("#second")


    dc = setInterval(()=>{

        let countTime = new Date()
        hour = countTime.getHours()
        min = countTime.getMinutes()
        second = countTime.getSeconds()

        document.querySelector("#hour").innerHTML = `${hour}&nbsp;:`
        document.querySelector("#min").innerHTML = `&nbsp;${min}&nbsp;:`
        document.querySelector("#second").innerHTML = `&nbsp; ${second}`

    },1000) 

}

function edd(){
    clearInterval(dc)
}