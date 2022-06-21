let isAlive = false;
let hasBlackjack = false;
let sum = 0;
let cards = [];
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Player",
    chips: 200
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        messageEl.textContent = "Do you want to play another round?";
    } else if (sum === 21) {
        messageEl.textContent = "You've got blackjack!";
        hasBlackjack = true;
    } else {
        isAlive = false;
        messageEl.textContent = "You're out of the game!";
    }
}

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random > 10) {
        return 10
    }
    if (random === 1) {
        return 11
    }
    return random
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    } else {
        alert("Either not alive or has blackjack");
    }
    
    
}

