var assert = require('chai').assert
var Card = require('../lib/card')

describe('Card', function() {
  describe('::new', function() {
    it('should create a new instance of Card', function() {
      let card = new Card("Question?", "Answer.", "Test Question")
      assert.instanceOf(card, Card)
    });
  });

  describe('getters', function() {
    it('should be able to get information about a card', function() {
      let card = new Card("Question?", "Answer.", "Test Question")
      assert.equal("Question?", card.question)
      assert.equal("Answer.", card.answer)
      assert.equal("Test Question", card.category)
    });
  });
});


