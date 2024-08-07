function double(d) {
    return d * 2;
}

function square(d) {
    return d * d;
}

function doubleSquare(d) {
    const doubled = double(d);
    const squared = square(doubled);
    return squared;
}

let  result = doubleSquare(3);
console.log(result);
