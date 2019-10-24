class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }

  correct() {
    return this.guess === this.card.answer
  }

  feedback() {
    if(this.correct() === true) {
      return "Correct!"
    } else {
      return "Incorrect."
    }
  }
}

module.exports = Turn
