function areAllStringsLong (dc){

    return dc.every((Element)=>{

        if(Element.length>=5)
        {
            return Element
        }
        
    })
    
}

let str = ['chirag','harsh','chintan','tushal','hiren','nitin']

var dcyt=areAllStringsLong(str)

console.log(dcyt)