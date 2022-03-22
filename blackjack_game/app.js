// let firstCard = getRandomCard()
// let secondCard = getRandomCard()

let cards = []

// let playerEl = document.getElementById('player-el')
// playerEl.textContent = `${players.name}: ${players.money}$`
let sum = 0

let hasBlackJack = false
let isAlive = false

let startBtn = document.getElementById('start-btn')
startBtn.addEventListener("click", startGame)

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let newBtn = document.querySelector("#new-btn")
newBtn.addEventListener("click", newCardFunc)
let newCard

function getRandomCard() {
    let cardNumber = Math.round(Math.random() * 12) + 1
    if (cardNumber === 1) {
        return 11
    } else if (cardNumber > 10) {
        return 10
    } else {
        return cardNumber
    }
}

function startGame() {
    // ekran boyumesinin transitionunu yaz
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    let sumFunc = () => {
        for (i = 0; i < cards.length; i++) {
            sum += cards[i]
        }
        return sum
    }
    sumFunc()
    renderGame()
}

function renderGame() {
    isAlive = true
    let message = ''
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got the blackjack!"
        messageEl.style.color = "goldenrod"  // win animation tetbiq et
        messageEl.style.fontSize = "35px"
        hasBlackJack = true
    } else {
        isAlive = false
        message = "You've lost!"
        messageEl.style.color = "beige"
        messageEl.style.fontSize = "35px"
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}

function newCardFunc() {
    if (isAlive === true && hasBlackJack === false) {
        newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}

// you can invoke function declaration before function and it will work if there is the function itself after 
// sumFunc()
// function sumFunc(){
//     for (i = 0; i < cards.length; i++) {
//         sum  += cards[i]
//         }
// }