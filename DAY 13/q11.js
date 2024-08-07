function printMultiplicationTable(dd) {
    let d = dd;
    for (let a = 1; a <= 10; a++) {

        let sum = d * a;

        console.log(`${d} ${a} ${sum}`);
    }

}

printMultiplicationTable(3);