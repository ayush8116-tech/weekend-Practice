import {mainDeck} from "./uno.js";
const dbg = (x) => (console.log(x)) && x;

const destructuredCards = array => array.map((card) => {
    const object = {};

    object.color = card.split(" ")[0];
    if (!isNaN(parseInt(card.split(" ")[1]))) {
        object.number = card.split(" ")[1];
        return object;
    }

    object.power = card.split(" ")[1];
    return object;
});

const structuredCards = array => array.map(card => Object.values(card)).flatMap(card => card.join(" "));

const powerCards = destructuredCards(mainDeck).filter((card) => card.power);
const normalCards = destructuredCards(mainDeck).filter((card) => card.number);

const random = (x) => Math.floor(Math.random() * x);

const dealCards = (deck, iteration) => {
  const distributed = [];
  
  for (let i = 0; i < iteration; i++) {
    const index = random(deck.length);
    distributed.push(deck[index]);
    deck.splice(index, 1);
  }
  
  return distributed;
};

const playerOneCards = dealCards(mainDeck, 7); //--> player one cards

const openingCard = array => {
  let randomCard = dealCards(array, 1);
  let card = destructuredCards(randomCard)[0];

  while(card.power) {
    randomCard = dealCards(array, 1);
    card = destructuredCards(randomCard)[0];
  }

   return randomCard;  
};

//

const playableCards = (playedCard, handDeck) => {
  const targetCard = destructuredCards(playedCard)[0];
  const handPile = destructuredCards(handDeck);

  const playable = handPile.filter(card => (targetCard.color === card.color) || (parseInt(targetCard.number) === parseInt(card.number)) )
  const canPlay = structuredCards(playable);
  dbg(canPlay)

  return handPile;
}

const discardPile = openingCard(mainDeck);
// dbg(discardPile)

const playerOneTurn = (handDeck, playedCard) => {
  playableCards([playedCard], handDeck);
  return playedCard; 
}

dbg(playerOneTurn(playerOneCards, discardPile[discardPile.length - 1]))
dbg(playerOneCards)
dbg(mainDeck.length)
