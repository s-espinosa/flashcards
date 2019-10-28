let Card = require("./lib/card")
let Deck = require("./lib/deck")
let Turn = require("./lib/turn")
let Round = require("./lib/round")
let Prompts = require("./lib/prompts")
let CardGenerator = require("./lib/card_generator")
const input = require('readline-sync')

let filepath = 'data/cards.csv'
let cards = new CardGenerator(filepath).cards
let deck = new Deck(cards)
let round = new Round(deck)
let prompts = new Prompts(deck)

console.log(prompts.intro())

for(let i = 0; i < cards.length; i++) {
  console.log(prompts.currentCard())
  let info = input.question((round.currentQuestion() + "\n"))
  let turn = round.takeTurn(info)
  console.log(turn.feedback())
}

console.log(prompts.feedback(round))

