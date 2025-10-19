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
    "Blue +2",
    "Blue +2",
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
    "Green +2",
    "Green +2",
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
    "Red +2",
    "Red +2",
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
    "Yellow +2",
    "Yellow +2",
    "Wild colour-change",
    "Wild colour-change",
    "Wild colour-change",
    "Wild colour-change",
    "Wild +4",
    "Wild +4",
    "Wild +4",
    "Wild +4",
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
const userCards = allDistributedCards[0];
console.log(userCards.join("\n"));
console.log("\n\n");

const botCards = allDistributedCards[1];
console.log(botCards.join("\n"));

const deckAfterDistribution = allDistributedCards[2];

function cardReveal(deck) {
    const index = randomIndex(deck.length);
    const revealedCard = deck[index];
    deck = removingCardsFromDeck(index, deck);

    console.log("\n\n");

    //   console.log(revealedCard);
    //   console.log(deck.length);
    return [revealedCard, deck];
}

function isCardAvailable(cardInDiscardPile) {
    const discardedCardArray = cardInDiscardPile.split(" ");

    const colour = discardedCardArray[0];
    const cardPower = discardedCardArray[1];

    for (let cardIndex = 0; cardIndex < 7; cardIndex++) {
        if (userCards[cardIndex].includes(colour) || userCards[cardIndex].includes(cardPower)) {
            return true;
        }
    }
    return false;
}

function isCardPlayable(cardInDiscardPile, drawnCard) {
  const drawnCardArray = drawnCard.split(" ")

    const colour = drawnCardArray[0];
    const cardPower = drawnCardArray[1];

    if(cardInDiscardPile.includes(colour) || cardInDiscardPile.includes(cardPower)) {
        return true;
    }

    return false;
}
// console.log(mainDeck.length);
function play(deckAfterDistribution) {
    const cards = cardReveal(deckAfterDistribution);
    let cardInDiscardPile = cards[0];
    const deck = cards[1];

    console.log(cardInDiscardPile);

   if(!isCardAvailable(cardInDiscardPile)) {
      const drawnCard = (cardReveal(deck))[0];
      console.log(drawnCard);
    
    if(isCardPlayable(cardInDiscardPile, drawnCard)){
      cardInDiscardPile = drawnCard;
      console.log(cardInDiscardPile);
    }
    
   } 
}

play(deckAfterDistribution);
