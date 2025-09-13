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
const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:', spadeAce);

const allSixes = deck.filter(card => card.value === '6');
console.log('Всі шістки:', allSixes);

const redCards = deck.filter(card => card.color === 'red');
console.log('Всі червоні карти:', redCards);

const diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('Всі буби:', diamonds);

const clubs9Plus = deck.filter(card =>
    card.cardSuit === 'clubs' &&
    (card.value === '9'|| card.value === '10' ||
card.value === 'jack'|| card.value === 'queen' ||
card.value === 'king' || card.value === 'ace')
);
console.log('Трефи від 9 і більше:', clubs9Plus);