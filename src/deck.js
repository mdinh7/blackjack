import Card from "./card.js"

class Deck {
    constructor(){
       this.cards = []
    }
   
    //creates initial deck
    generate(){
        let playingDeck = this.cards
        let suits = ["hearts", "spades", "clubs", "diamonds"]
        let type = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

        for (let i = 0; i < suits.length; i++) {
          for (let j = 0; j < type.length; j++) {
            let playingCard = new Card(suits[i],type[j])
            playingDeck.push(playingCard)
          }

        }
      this.cards = playingDeck
      return this.cards
    }

    //shuffles deck
    shuffle(deck){

    }
}

export default Deck;