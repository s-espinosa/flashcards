let Turn = require("./turn")

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = []
  }

  currentCard() {
    return this.deck.currentCard()
  }

  currentQuestion() {
    return this.deck.currentQuestion()
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.currentCard())
    this.turns.push(newTurn)
    this.deck.takeTurn()
    return newTurn
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
    let correct = this.numberCorrect()
    let total = this.turns.length

    return ((correct/total) * 100).toFixed(2)
  }

  percentCorrectByCategory(category) {
    let correct = this.numberCorrectByCategory(category)
    let total = this.turnsInCategory(category)

    return ((correct/total) * 100).toFixed(2)
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

  categories() {
    let cats = []
    this.deck.cards.forEach((card) => {
      if(!cats.includes(card.category)) {
        cats.push(card.category)
      }
    })
    return cats
  }
}

module.exports = Round
