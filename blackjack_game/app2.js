let cardsArray = [{
        name: 'card1',
        img: 'img/cards/card1.jpg'
    },
    {
        name: 'card2',
        img: 'img/cards/card2.jpg'
    },
    {
        name: 'card3',
        img: 'img/cards/card3.jpg'
    },
    {
        name: 'card4',
        img: 'img/cards/card4.jpg'
    },
    {
        name: 'card5',
        img: 'img/cards/card5.jpg'
    },
    {
        name: 'card6',
        img: 'img/cards/card6.jpg'
    },
    {
        name: 'card7',
        img: 'img/cards/card7.jpg'
    },
    {
        name: 'card8',
        img: 'img/cards/card8.jpg'
    },
    {
        name: 'card9',
        img: 'img/cards/card9.jpg'
    },
    {
        name: 'card10',
        img: 'img/cards/card10.jpg'
    },
    {
        name: 'card11',
        img: 'img/cards/card11.jpg'
    },
    {
        name: 'card12',
        img: 'img/cards/card12.jpg'
    },
    {
        name: 'card13',
        img: 'img/cards/card13.jpg'
    }
]

let cards = []
let container = document.querySelector('.container')
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let cardsArea = document.getElementById('cards-area')
let imgBefore = document.querySelector('.before-begin')

let startBtn = document.getElementById('start-btn')
let newBtn = document.querySelector("#new-btn")
const newGameBtn = document.getElementById('new-game-btn')

let cardsImg1 = document.getElementById('cards-img1')
let cardsImg2 = document.getElementById('cards-img2')

let sum = 0

let hasBlackJack = false
let isAlive = false
let leftPosition = 170

let players = {
    name: 'Default',
    money: 100
}
players.name = prompt('Your name: ')
players.money = +prompt('money: ')
let playerEl = document.getElementById('player-el')
playerEl.textContent = `${players.name}: ${players.money}$`

startBtn.addEventListener("click", startGame, {once: true})
newBtn.addEventListener("click", newCardFunc)
newGameBtn.addEventListener("click", ()=>location.reload())

function startGame() {
    let card1 = Math.round(Math.random() * 12) + 1
    let card2 = Math.round(Math.random() * 12) + 1
    cardsImg1.setAttribute('src', cardsArray[card1 - 1].img)
    cardsImg2.setAttribute('src', cardsArray[card2 - 1].img)

    card1 = card1 === 1 ? 11 : card1 > 10 ? 10 : card1
    card2 = card2 === 1 ? 11 : card2 > 10 ? 10 : card2
    cards.push(card1, card2)
    
    sum = cards.reduce((acc,cur) => acc+cur)
    renderGame()
    newBtn.style.display = "block"
    newGameBtn.style.display = "block"
    imgBefore.style.display = "none"
    cardsArea.style.display = "block"
    container.classList.add('anime')
}

function renderGame() {
    isAlive = true
    let message = ''
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got the blackjack!"
        messageEl.classList.add('won','animate__flash')
        hasBlackJack = true
        newBtn.style.display = "none"
    } else {
        isAlive = false
        message = "You've lost!"
        messageEl.classList.add('lost','animate__wobble')
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = cards.reduce((acc,cur) => acc + " " + cur,"Cards: ")
}

function newCardFunc() {
    if (isAlive === true && hasBlackJack === false) {
        let cardsImgNew = document.createElement('img')
        cardsArea.append(cardsImgNew)
        let newCard = Math.round(Math.random() * 12) + 1
        cardsImgNew.setAttribute('src', cardsArray[newCard - 1].img)
        cardsImgNew.style.left = `${leftPosition += 40}px`
        newCard = newCard === 1 ? 11 : newCard > 10 ? 10 : newCard
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}