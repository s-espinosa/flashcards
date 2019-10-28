let Card = require("./lib/card")
let Deck = require("./lib/deck")
let Turn = require("./lib/turn")
let Round = require("./lib/round")
let Prompts = require("./lib/prompts")
const input = require('readline-sync')

let card1 = new Card("Question?", "Answer", "Test Question")
let card2 = new Card("Question 2?", "Answer 2", "Test Question")
let card3 = new Card("Question 3?", "Answer 3", "Pop Culture")
let cards = [card1, card2, card3]
let deck = new Deck(cards)
let round = new Round(deck)
let prompts = new Prompts(deck)

console.log(prompts.intro())
console.log(prompts.currentCard())

let i
for(i = 0; i < cards.length; i++) {
  let info = input.question((round.currentQuestion() + "\n"))
  round.takeTurn(info)
}

console.log(prompts.feedback(round))

