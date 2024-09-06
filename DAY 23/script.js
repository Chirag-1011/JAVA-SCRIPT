let arr = [
    {
        quote : "Be yourself; everyone else is already taken.",
        writer : "― Oscar Wilde"
    },

    {
        quote : "A room without books is like a body without a soul.",
        writer : "― Marcus Tullius Cicero"
    },

    {
        quote : "You only live once, but if you do it right, once is enough.",
        writer : "― Mae West"
    },

    {
        quote : "Be the change that you wish to see in the world.",
        writer : "― Mahatma Gandhi"
    }
]

function dcyt(){

    let b = Math.floor(Math.random()*arr.length)

    let a = document.getElementById("a").innerHTML = `<h1>${arr[b].quote}</h1><h1>${arr[b].writer}</h1>`

}