let assert = require('chai').assert
let Card = require('../lib/card')
let Turn = require('../lib/turn')
let Deck = require('../lib/deck')
let Round = require('../lib/round')

describe('Round', () => {
  describe('::new', () => {
    it('should create a new instance of Round', () => {
      let card1 = new Card("Question?", "Answer", "Test Question")
      let card2 = new Card("Question 2?", "Answer 2", "Test Question")
      let card3 = new Card("Question 3?", "Answer 3", "Pop Culture")
      let cards = [card1, card2, card3]
      let deck = new Deck(cards)
      let round = new Round(deck)

      assert.instanceOf(round, Round)
    })
  })

  describe('getters', () => {
    it('should provide access to state', () => {
      let card1 = new Card("Question?", "Answer", "Test Question")
      let card2 = new Card("Question 2?", "Answer 2", "Test Question")
      let card3 = new Card("Question 3?", "Answer 3", "Pop Culture")
      let cards = [card1, card2, card3]
      let deck = new Deck(cards)
      let round = new Round(deck)

      assert.equal(round.deck, deck)
      assert.deepEqual(round.turns, [])
    })
  })

  describe('#currentCard', () => {
    it('should return the first card before any turns are taken', () => {
      let card1 = new Card("Question?", "Answer", "Test Question")
      let card2 = new Card("Question 2?", "Answer 2", "Test Question")
      let card3 = new Card("Question 3?", "Answer 3", "Pop Culture")
      let cards = [card1, card2, card3]
      let deck = new Deck(cards)
      let round = new Round(deck)

      assert.equal(round.currentCard(), card1)
    })
  })

  describe('#takeTurn', () => {
    it('records a turn', () => {
      let card1 = new Card("Question?", "Answer", "Test Question")
      let card2 = new Card("Question 2?", "Answer 2", "Test Question")
      let card3 = new Card("Question 3?", "Answer 3", "Pop Culture")
      let cards = [card1, card2, card3]
      let deck = new Deck(cards)
      let round = new Round(deck)

      assert.equal(round.currentCard(), card1)
      round.takeTurn("Answer")
      assert.instanceOf(round.turns[0], Turn)
    })
  })

})
