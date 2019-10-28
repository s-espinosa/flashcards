let assert = require('chai').assert
let CardGenerator = require('../lib/card_generator')
let Card = require('../lib/card')

describe('CardGenerator', () => {
  describe('::new', () => {
    it('should create an array of Card objects', () => {
      let filepath = 'data/cards.csv'
      let cg = new CardGenerator(filepath)

      assert.instanceOf(cg.cards, Array)
      assert.instanceOf(cg.cards[0], Card)
    })
  })
})
