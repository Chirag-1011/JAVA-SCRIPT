function getEvenNumbers(dc) {
    
    return dc.filter((Element) => {
        if (Element % 2 == 0)
        {
            return Element
        }
    })
    
}

let arr = [1, 3, 4, 5, 6, 7, 8]

let dcyt = getEvenNumbers(arr)

console.log(dcyt)