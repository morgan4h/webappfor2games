console.log('js working...')

// create the vars consts

let responsiveBtn = document.querySelector('.responsive-item');
let close = document.querySelector('.close')
let char = document.querySelector('.char')

// functions


responsiveBtn.onclick = function () {
    // console.log('do the function')
    document.querySelector('nav ul').style.display = 'block'
}
close.onclick = function () {
    document.querySelector('nav ul').style.display = 'none'
}

// let make the char move and react when the user click on it
let messagesOfChar = ['hi', 'hello', 'let start', 'are you ready !']

char.onclick = function () {
    let randomNumberFromArray = Math.floor(Math.random() * messagesOfChar.length);

    console.log(messagesOfChar[randomNumberFromArray])

    char.textContent = messagesOfChar[randomNumberFromArray]

}

addEventListener('keydown', function (e) {
    console.log(e.key)
    if (e.key == 'ArrowUp') {
        char.style.top = '11%'
    } else if (e.key == 'ArrowDown') {
        char.style.bottom = '15%'
    } else if (e.key == 'ArrowRight') {
        char.style.right = '11%'
    } else if (e.key == 'ArrowLeft') {
        char.style.left = '5%'
    } else {

    }
})