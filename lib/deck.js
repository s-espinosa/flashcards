class Deck {
  constructor(cards) {
    this.cards = cards
  }

  cardsInCategory(category) {
    let categoryCards = []
    this.cards.forEach((card) => {
      if(card.category === category) {
        categoryCards.push(card)
      }
    })
    return categoryCards
  }

  count() {
    return this.cards.length
  }
}

module.exports = Deck
