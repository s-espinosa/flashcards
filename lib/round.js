class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = []
  }

  currentCard() {
    return this.deck.currentCard()
  }
}

module.exports = Round
