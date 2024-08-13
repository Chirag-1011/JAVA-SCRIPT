function reverseString(word) {

    let a = "";

    for (let b = word.length - 1; b >= 0; b--) {
        a = a + word[b]
    }

    return a;

}


console.log(reverseString("hello"));