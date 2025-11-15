const dbg = (x) => (console.log(x)) && x;

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

const structuredDeck = mainDeck.map((card) => {
    const object = {};

    object.color = card.split(" ")[0];
    if (!isNaN(parseInt(card.split(" ")[1]))) {
        object.number = card.split(" ")[1];
        return object;
    }

    object.power = card.split(" ")[1];
    return object;
});

const powerCards = structuredDeck.filter((card) => card.power);
const normalCards = structuredDeck.filter((card) => card.number);

const random = (x) => Math.floor(Math.random() * x);

const distribution = (deck) => {
    const distributed = [];

    for (let i = 0; i < 7; i++) {
        const index = random(deck.length);
        distributed.push(deck[index]);
        deck.splice(index, 1);
    }

    return distributed;
};

const playerOneCards = distribution(mainDeck); 
const discardPile = [];

const openFirstCard = 

dbg(playerOneCards)
dbg(mainDeck.length)
