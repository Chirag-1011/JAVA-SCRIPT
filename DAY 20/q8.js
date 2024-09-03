let a = [12, 17, 19, 21, 15, 28];

let b = a.filter((Element,index)=>{
    if(Element>=18){
        return Element
    }
})
console.log(b);
