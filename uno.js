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

function isCardAvailable(cardInDiscardPile, userCards) {
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

    if(cardInDiscardPile.includes(colour) || cardInDiscardPile.includes(cardPower) || drawnCard.includes("Wild")) {
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
    let drawnCard;
    
    if(!isCardAvailable(cardInDiscardPile, userCards)) {
    console.log(`${cardInDiscardPile} is not available in your hand \n draw it`)
        
            drawnCard = (cardReveal(deck))[0];

        console.log(`drawn card is ${drawnCard}`);
    //   console.log(drawnCard);
    
    if(isCardPlayable(cardInDiscardPile, drawnCard)){
      const askToPlay = prompt("PLAY / KEEP");
      
      if(askToPlay === "PLAY") {
          cardInDiscardPile = drawnCard;
      } else{
        userCards.push(drawnCard);
      }
    } else {
        userCards.push(drawnCard);
    }
    console.log(userCards);
   } else {
    const askToPlay = prompt("PLAY (enter any number): ");

    if(askToPlay < Infinity) {
        const cardsPlayable = [];

        for(let i = 0; i < userCards.length; i++) {
          const cardInDiscardPileArray = cardInDiscardPile.split(" ");
          
          if(userCards[i].includes(cardInDiscardPileArray[0]) || userCards[i].includes(cardInDiscardPileArray[1])) {
            cardsPlayable.push(userCards[i]);
          }        
        }
        const cardsForPlay = cardsPlayable;
        console.log(`You can play these cards \n ${cardsForPlay}`);
        
        const cardToPlay = prompt("CHOOSE CARD TO PLAY (enter the number) :  ");
        console.log(removingCardsFromDeck(userCards.indexOf(cardsForPlay[cardToPlay - 1]), userCards));

        cardInDiscardPile = cardsForPlay[cardToPlay - 1];
        console.log(`now discard pile card is ${cardInDiscardPile}`);
        
    } else{
        userCards.push(drawnCard);
        console.log(userCards);
        
    }
   }
}

play(deckAfterDistribution);
