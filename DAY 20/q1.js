let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]


let b = a.filter((element, index) => {

    if (element % 2 == 1) {
        return element;
    }

})

let c = b.map((element, index) => {
    return element * element
})


console.log(c);