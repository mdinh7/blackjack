class Dealer {
    constructor(){
        this.hand = [];
        this.turn = false;
    }
    
    //uses valueCalc to calculate value of hand, based on that hit will either take a card or will stay.
    
    valueCalc(hand){
      
    }


    hit(deck){
      let drawnCard = deck.pop()
      console.log(drawnCard)
      this.hand.push(drawnCard)
      console.log(this.hand)
    }

     //sets turn to true
     setTurn() {
        this.turn = true
     }

    //sets turn to false
    passTurn() {
        this.turn = false
    }

    deal(deck){
      this.hit(deck)
      this.hit(deck)
    }
}

export default class Dealer {}