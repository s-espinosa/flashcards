let assert = require('chai').assert
let Card = require('../lib/card')
let Deck = require('../lib/deck')

describe('Deck', () => {
  describe('::new', () => {
    it('should create a new instance of Deck', () => {
      let card1 = new Card("Question?", "Answer", "Test Question")
      let card2 = new Card("Question 2?", "Answer 2", "Test Question")
      let cards = [card1, card2]
      let deck = new Deck(cards)

      assert.instanceOf(deck, Deck)
    })
  })

  describe('getters', () => {
    it('should get information about the Deck', () => {
      let card1 = new Card("Question?", "Answer", "Test Question")
      let card2 = new Card("Question 2?", "Answer 2", "Test Question")
      let cards = [card1, card2]
      let deck = new Deck(cards)

      assert.equal(deck.cards, cards)
    })
  })

  describe('#count', () => {
    it('should return the count of all cards in the Deck', () => {
      let card1 = new Card("Question?", "Answer", "Test Question")
      let card2 = new Card("Question 2?", "Answer 2", "Test Question")
      let card3 = new Card("Question 3?", "Answer 3", "Pop Culture")
      let cards = [card1, card2, card3]
      let deck = new Deck(cards)

      assert.equal(deck.count(), 3)
    })
  })

  describe('#cardsInCategory', () => {
    it('should return the cards in a specific category', () => {
      let card1 = new Card("Question?", "Answer", "Test Question")
      let card2 = new Card("Question 2?", "Answer 2", "Test Question")
      let card3 = new Card("Question 3?", "Answer 3", "Pop Culture")
      let cards = [card1, card2, card3]
      let deck = new Deck(cards)

      assert.deepEqual(deck.cardsInCategory("Test Question"), [card1, card2])
      assert.deepEqual(deck.cardsInCategory("Pop Culture"), [card3])
    })
  })
})
