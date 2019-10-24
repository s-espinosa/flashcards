class Deck {
  constructor(cards) {
    this.cards = cards
    this.currentIndex = 0
  }

  count() {
    return this.cards.length
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

  currentCard() {
    let currentPosition = this.currentIndex % this.cards.length
    return this.cards[currentPosition]
  }

  takeTurn() {
    this.currentIndex++
  }
}

module.exports = Deck
