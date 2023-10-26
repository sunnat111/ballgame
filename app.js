
let color = ['red','blue','green']

let btn = document.querySelector('.btn'),
    input = document.querySelector('.input'),
    timeOut = document.querySelector('.time'),
    gameBox = document.querySelector('.game__block'),
    time = 0,
    score = 0,
    interval = 0;
    
btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})




function start() {
    btn.disabled = true
    timeOut.innerHTML = time
    interval = setInterval(() => {
        decrease()
    }, 1000);
    createBall()
}

function decrease() {
    if(time == 0) {
        endGame()
    }else {
        let currentTime = --time
        timeOut.innerHTML = currentTime
    }
}

function endGame() {
    gameBox.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
    btn.disabled = false
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let coor = gameBox.getBoundingClientRect()
    let size = randomSize(20,100)
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)
    ball.style.width = size + 'px' 
    ball.style.height = size + 'px'
    ball.style.background = setColor()    
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
 //   ball.style.borderRadius = []
    
    gameBox.append(ball)
}

function random(min,max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
 
function randomSize(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function setColor() {
    return `rgb(${randomColor(0,255)},${randomColor(0,255)},${randomColor(0,255)})`
}

function randomColor(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min )
}
    