let CardGenerator = require('./card_generator')
let Deck = require("./deck")
let Round = require("./round")
let Prompts = require("./prompts")

const input = require('readline-sync')


class Game {
  constructor(filepath) {
    this.filepath = filepath
    this.cards = new CardGenerator(filepath).cards
    this.deck = new Deck(this.cards)
    this.round = new Round(this.deck)
    this.prompts = new Prompts(this.deck)
  }

  play() {
    this.printIntro()
    this.takeTurns()
    this.printSummary()
  }

  printIntro() {
    console.log(this.prompts.intro())
  }

  takeTurns() {
    for(let i = 0; i < this.cards.length; i++) {
      console.log(this.prompts.currentCard())
      let info = input.question((this.round.currentQuestion() + "\n"))
      let turn = this.round.takeTurn(info)
      console.log(turn.feedback(), '\n')
    }
  }

  printSummary() {
    console.log(this.prompts.feedback(this.round))
  }
}

module.exports = Game
