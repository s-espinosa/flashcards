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
    this.deck.takeTurn()
  }

  numberCorrect() {
    let correct = 0
    this.turns.forEach((turn) => {
      if(turn.correct()) {
        correct++
      }
    })
    return correct
  }

  numberCorrectByCategory(category) {
    let correct = 0
    this.turns.forEach((turn) => {
      if(turn.card.category === category && turn.correct()) {
        correct++
      }
    })
    return correct
  }

  percentCorrect() {
    return (this.numberCorrect() / this.turns.length) * 100.0
  }

  percentCorrectByCategory(category) {
    let correct = this.numberCorrectByCategory(category)
    let total = this.turnsInCategory(category)

    return (correct/total) * 100.0
  }

  turnsInCategory(category) {
    let count = 0
    this.turns.forEach((turn) => {
      if(turn.card.category == category) {
        count++
      }
    })
    return count
  }
}

module.exports = Round
