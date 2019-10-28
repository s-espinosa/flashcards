let Card = require('./card')
let papa = require('papaparse')
let fs = require('fs');

class CardGenerator {
  constructor (filepath) {
    this.cards = this.generateCards(filepath)
  }

  generateCards(filepath) {
    let cardArray = []
    let csvText = fs.readFileSync(filepath, 'utf-8')
    let data = papa.parse(csvText)
    data.data.forEach((card) => {
      if(card[0] != "") {
        let newCard = new Card(card[0], card[1], card[2])
        cardArray.push(newCard)
      }
    })
    return cardArray
  }
}

module.exports = CardGenerator
