$('#addJokeBtn').on('click', () => {
    let popupOpen = $('.popup').css('opacity')
    if (popupOpen == 0) {
        $('.popup').css('opacity', 1)
    }else{
        $('.popup').css('opacity', 0)
    }
})

$('#addJoke').on('click', () => {
    let name = $('#jokeName').val()
    let text = $('#jokeText').val()
    axios.post('http://localhost:3000/sendJoke', {name, text})
})