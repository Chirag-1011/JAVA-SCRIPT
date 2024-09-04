function areAllPositive (dc){
    return dc.every((Element)=>{

        if(Element>0)
        {
            return Element
        }
    })
}

let num = [5,3,5,6,7,9]

let dcyt=areAllPositive(num)

console.log(dcyt)