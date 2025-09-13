let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6','7','8','9','10','jack','queen','king','ace'];
const deck = [];
for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        });
    }
}
const packedBySuit = deck.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;
        case 'diamond':
            acc.diamonds.push(card);
            break;
        case 'heart':
            acc.hearts.push(card);
            break;
        case 'clubs':
            acc.clubs.push(card);
            break;
    }
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(packedBySuit);