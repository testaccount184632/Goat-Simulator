const getGoatImage = document.querySelector('.goat > img')
const getResetButton = document.querySelector('.reset')
const getScoreSection = document.querySelector('.score')

let score = 0;

getGoatImage.addEventListener('click', function () {
    score++
    getScoreSection.innerText = score;
    if (score == 50) {
        getGoatImage.setAttribute('src', 'img/goat-2.png')
    }
})

getResetButton.addEventListener('click', function () {
    score = 0;
    getScoreSection.innerText = score;
    if (score == 0) {
        getGoatImage.setAttribute('src', 'img/goat.png')
    }
})
