let a =  [10, 20, 30, 150, 60] ;

let b = a.some((Element)=>{

    if(Element>100){
        return Element
    }
})
console.log(b);