const mainDeck = [
    "Blue 0",
    "Blue 1",
    "Blue 2",
    "Blue 3",
    "Blue 4",
    "Blue 5",
    "Blue 6",
    "Blue 7",
    "Blue 8",
    "Blue 9",
    "Blue 1",
    "Blue 2",
    "Blue 3",
    "Blue 4",
    "Blue 5",
    "Blue 6",
    "Blue 7",
    "Blue 8",
    "Blue 9",
    "Blue Skip",
    "Blue Skip",
    "Blue Reverse",
    "Blue Reverse",
    "Blue Draw-Two",
    "Blue Draw-Two",
    "Green 0",
    "Green 1",
    "Green 2",
    "Green 3",
    "Green 4",
    "Green 5",
    "Green 6",
    "Green 7",
    "Green 8",
    "Green 9",
    "Green 1",
    "Green 2",
    "Green 3",
    "Green 4",
    "Green 5",
    "Green 6",
    "Green 7",
    "Green 8",
    "Green 9",
    "Green Skip",
    "Green Skip",
    "Green Reverse",
    "Green Reverse",
    "Green Draw-Two",
    "Green Draw-Two",
    "Red 0",
    "Red 1",
    "Red 2",
    "Red 3",
    "Red 4",
    "Red 5",
    "Red 6",
    "Red 7",
    "Red 8",
    "Red 9",
    "Red 1",
    "Red 2",
    "Red 3",
    "Red 4",
    "Red 5",
    "Red 6",
    "Red 7",
    "Red 8",
    "Red 9",
    "Red Skip",
    "Red Skip",
    "Red Reverse",
    "Red Reverse",
    "Red Draw-Two",
    "Red Draw-Two",
    "Yellow 0",
    "Yellow 1",
    "Yellow 2",
    "Yellow 3",
    "Yellow 4",
    "Yellow 5",
    "Yellow 6",
    "Yellow 7",
    "Yellow 8",
    "Yellow 9",
    "Yellow 1",
    "Yellow 2",
    "Yellow 3",
    "Yellow 4",
    "Yellow 5",
    "Yellow 6",
    "Yellow 7",
    "Yellow 8",
    "Yellow 9",
    "Yellow Skip",
    "Yellow Skip",
    "Yellow Reverse",
    "Yellow Reverse",
    "Yellow Draw-Two",
    "Yellow Draw-Two",
    "Wild colour-change",
    "Wild colour-change",
    "Wild colour-change",
    "Wild colour-change",
    "Wild Draw-Four",
    "Wild Draw-Four",
    "Wild Draw-Four",
    "Wild Draw-Four",
];

function removingCardsFromDeck(randomIndex, deck) {
    const deck1 = deck.slice(0, randomIndex);
    const deck2 = deck.slice(randomIndex + 1);

    return deck1.concat(deck2);
}

function randomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function cardDistribution(mainDeck) {
    const userHandCards = [];
    const botHandCards = [];

    for (let i = 0; i < 7; i++) {
        const cardIndex = randomIndex(mainDeck.length);
        const card = mainDeck[cardIndex];
        userHandCards.push(card);

        mainDeck = removingCardsFromDeck(cardIndex, mainDeck);
    }

    for (let i = 0; i < 7; i++) {
        const cardIndex = randomIndex(mainDeck.length);
        const card = mainDeck[cardIndex];
        botHandCards.push(card);

        mainDeck = removingCardsFromDeck(cardIndex, mainDeck);
    }

    return [userHandCards, botHandCards, mainDeck];
}

console.clear();

const allDistributedCards = cardDistribution(mainDeck);
let userCards = allDistributedCards[0];

console.log(userCards.join("\n"));
console.log("\n\n");

let botCards = allDistributedCards[1];
console.log(botCards.join("\n"));

let deck = allDistributedCards[2];

function cardReveal(deck) {
    const index = randomIndex(deck.length);
    const revealedCard = deck[index];
    deck = removingCardsFromDeck(index, deck);

    console.log("\n\n");

    //   console.log(revealedCard);
    //   console.log(deck.length);
    return [revealedCard, deck];
}

function isCardAvailable(cardInDiscardPile, userCards) {
    const discardedCardArray = cardInDiscardPile.split(" ");

    const colour = discardedCardArray[0];
    const cardPower = discardedCardArray[1];

    for (let cardIndex = 0; cardIndex < userCards.length; cardIndex++) {
        if (
            userCards[cardIndex].includes(colour) ||
            userCards[cardIndex].includes(cardPower) ||
            discardedCardArray.includes("Wild")
        ) {
            return true;
        }
    }
    return false;
}

function isCardPlayable(cardInDiscardPile, drawnCard) {
    const drawnCardArray = drawnCard.split(" ");

    const colour = drawnCardArray[0];
    const cardPower = drawnCardArray[1];

    if (
        cardInDiscardPile.includes(colour) ||
        cardInDiscardPile.includes(cardPower) || drawnCardArray.includes("Wild")
    ) {
        return true;
    }

    return false;
}
// console.log(mainDeck.length);

const cards = cardReveal(deck);
let cardInDiscardPile = cards[0];
deck = cards[1];

function userTurn() {
    console.log(cardInDiscardPile);
    let drawnCard;

    if (!isCardAvailable(cardInDiscardPile, userCards)) {
        console.log(
            `${cardInDiscardPile} is not available in your hand \n draw it`,
        );

        const askToDraw = prompt("Draw (enter any number) : ");

        if (askToDraw < Infinity) {
            // console.log(deck.length);
            drawnCard = (cardReveal(deck))[0];
            deck = cardReveal(deck)[1];
        }

        console.log(`drawn card is ${drawnCard}`);

        if (isCardPlayable(cardInDiscardPile, drawnCard)) {
            const askToPlay = prompt("1.PLAY / 2.KEEP");

            if (askToPlay === 1) {
                cardInDiscardPile = drawnCard;
            } else {
                userCards.push(drawnCard);
            }
        } else {
            userCards.push(drawnCard);
        }
        console.log(userCards);
    } else {
        const askToPlay = prompt("PLAY (enter any number): ");

        if (askToPlay < Infinity) {
            const cardsPlayable = [];

            for (let i = 0; i < userCards.length; i++) {
                const cardInDiscardPileArray = cardInDiscardPile.split(" ");

                if (
                    userCards[i].includes(cardInDiscardPileArray[0]) ||
                    userCards[i].includes(cardInDiscardPileArray[1])
                ) {
                    cardsPlayable.push(userCards[i]);
                }
            }

            const cardsForPlay = cardsPlayable;
            console.log(`You can play these cards \n ${cardsForPlay}`);

            const cardToPlay = prompt(
                "CHOOSE CARD TO PLAY (enter the number) :  ",
            );
            userCards = removingCardsFromDeck(
                userCards.indexOf(cardsForPlay[cardToPlay - 1]),
                userCards,
            );

            cardInDiscardPile = cardsForPlay[cardToPlay - 1];
            console.log(`now discard pile card is ${cardInDiscardPile}`);
        } else {
            userCards.push(cardReveal(deck));
            console.log(userCards);
        }
    }
}

function botTurn() {
    console.log(cardInDiscardPile);
    let drawnCard;

    if (!isCardAvailable(cardInDiscardPile, botCards)) {
        console.log(
            `${cardInDiscardPile} is not available in your hand \n draw it`,
        );

        const askToDraw = prompt("Draw (enter any number) : ");
        if (askToDraw < Infinity) {
            drawnCard = (cardReveal(deck))[0];
            deck = (cardReveal(deck))[1];
            // console.log(deck.length);
        }

        console.log(`drawn card is ${drawnCard}`);

        if (isCardPlayable(cardInDiscardPile, drawnCard)) {
            const askToPlay = prompt("1.PLAY / 2.KEEP");

            if (askToPlay === 1) {
                cardInDiscardPile = drawnCard;
            } else {
                botCards.push(drawnCard);
            }
        } else {
            botCards.push(drawnCard);
        }
        console.log(botCards);
    } else {
        const askToPlay = prompt("PLAY (enter any number): ");

        if (askToPlay < Infinity) {
            const cardsPlayable = [];

            for (let i = 0; i < botCards.length; i++) {
                const cardInDiscardPileArray = cardInDiscardPile.split(" ");

                if (
                    botCards[i].includes(cardInDiscardPileArray[0]) ||
                    botCards[i].includes(cardInDiscardPileArray[1])
                ) {
                    cardsPlayable.push(botCards[i]);
                }
            }

            const cardsForPlay = cardsPlayable;
            console.log(`You can play these cards \n ${cardsForPlay}`);

            const cardToPlay = prompt(
                "CHOOSE CARD TO PLAY (enter the number) :  ",
            );
            botCards = removingCardsFromDeck(
                botCards.indexOf(cardsForPlay[cardToPlay - 1]),
                botCards,
            );

            cardInDiscardPile = cardsForPlay[cardToPlay - 1];
            console.log(`now discard pile card is ${cardInDiscardPile}`);
        } else {
            botCards.push(cardReveal(deck));
            console.log(botCards);
        }
    }
}

function playingGame() {
    let i = 0;
    while (userCards.length !== 0 && botCards.length !== 0) {
        const remainder = i % 2;
        console.log(remainder);

        if (remainder === 0) {
            console.clear();
            console.log("USER TURN");
            console.log(`length of deck is ${deck.length}`);
            console.log(userCards);

            userTurn();
        } else {
            console.clear();
            console.log("BOT TURN");
            console.log(`length of deck is ${deck.length}`);
            console.log(botCards);

            botTurn();
        }
        i = i + 1;
    }

    const result = userCards.length === 0 ? "USER WINS !!" : "BOT WINS !!";
    console.log(result);
}

playingGame();
