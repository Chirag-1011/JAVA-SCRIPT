
function doubleNumbers(dc) { 
    return dc.map((Element)=> {
        
        return Element * 2
    })

}

let arr = [5, 1, 3, 4, 6]

let dcyt = doubleNumbers(arr)

console.log(dcyt)