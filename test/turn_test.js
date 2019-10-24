var assert = require('chai').assert
var Card = require('../lib/card')
var Turn = require('../lib/turn')

describe('Turn', function() {
  describe('::new', function() {
    it('should create a new instance of Turn', function() {
      let card = new Card("Question?", "Answer.", "Test Question")
      let turn = new Turn("Answer.", card)
    })
  })

  describe('getters', function() {
    it('should get information about the turn', function() {
      let card = new Card("Question?", "Answer.", "Test Question")
      let turn = new Turn("Answer.", card)

      assert.equal(card, turn.card)
      assert.equal("Answer.", turn.guess)
      assert.equal(true, turn.correct())
    })
  })

  describe('#correct', function() {
    it('can determine if a guess is correct', function() {
      let card = new Card("Question?", "Answer.", "Test Question")
      let turn = new Turn("Answer.", card)

      assert.equal(true, turn.correct())
    })

    it('can determine if a guess is incorrect', function() {
      let card = new Card("Question?", "Answer.", "Test Question")
      let turn = new Turn("Wrong answer.", card)

      assert.equal(false, turn.correct())
    })
  })

  describe('#feedback', function() {
    it('can give feedback when a guess is correct', function() {
      let card = new Card("Question?", "Answer.", "Test Question")
      let turn = new Turn("Answer.", card)

      assert.equal("Correct!", turn.feedback())
    })

    it('can give feedback when a guess is incorrect', function() {
      let card = new Card("Question?", "Answer.", "Test Question")
      let turn = new Turn("Wrong answer.", card)

      assert.equal("Incorrect.", turn.feedback())
    })
  })
})
