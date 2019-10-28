class Prompts {
  constructor(deck) {
    this.deck = deck
  }

  intro() {
    return `Welcome! You're playing with ${this.deck.count()} cards.
-------------------------------------------------
    `
  }

  currentCard() {
    return `This is card number ${this.deck.currentIndex + 1} out of ${this.deck.count()}.`
  }

  feedback(round) {
    let summary = this.summary(round)
    let detail = this.detail(round)
    return `${summary}
${detail}`
    return `****** Game over! ******
You had ${round.numberCorrect()} correct guesses out of ${this.deck.count()} for a total score of ${round.percentCorrect()}%.
STEM - 100% correct
Turing Staff - 50% correct
Pop Culture - 100% correct
`
  }

  summary(round) {
    return `****** Game over! ******
You had ${round.numberCorrect()} correct guesses out of ${this.deck.count()} for a total score of ${round.percentCorrect()}%.
`
  }

  detail(round) {
    let lines = ""
    round.categories().forEach((category) => {
      let percentCorrect = round.percentCorrectByCategory(category)
      lines += `${category} - ${percentCorrect}% correct\n`
    })
    return lines
  }
}

module.exports = Prompts
