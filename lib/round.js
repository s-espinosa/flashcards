let Turn = require("./turn")

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = []
  }

  currentCard() {
    return this.deck.currentCard()
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.currentCard())
    this.turns.push(newTurn)
  }
}

module.exports = Round
