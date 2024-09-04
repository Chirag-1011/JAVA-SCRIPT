function hasAnyEvenNumber (dc){

    return arr.some((Element) => {
        if(Element % 2 == 1)
        {
            return Element
        }
    })

}


let arr = [10,5,3,7,6,90,8,9]

let dcyt=hasAnyEvenNumber(arr)

console.log(dcyt)