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

$('#generateJoke').on('click', () => {
    axios.get('http://localhost:3000/getJoke').then(res => {
        $('.JokesList').text(res.data)
    })
})
$('#musicBtn').on('click', () => {
    let audio = $('.musicBtn audio')[0]
    if(audio.paused){
        audio.play()
    }else{
        audio.pause()
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('bw-theme');
    });
});