app.get(`http:localhost:3000/getNotVerifJokes`)
.then(res => {
    res.forEach((i) => {
        $(`.verifJokes`).append(
            `<p>${i.joke}</p>
            <button id="accept">accept</button>
            <button id="decline">decline</button>
            `
        )
    })
        
})