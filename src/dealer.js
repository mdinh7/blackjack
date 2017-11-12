class Dealer {
    constructor(){
        this.hand = [];
        this.turn = false;
    }
    
    //uses valueCalc to calculate value of hand, based on that hit will either take a card or will stay.
    
    valueCalc(hand){
      let values = []
      hand.forEach(function(card){
          if(Number.isInteger(parseInt(card.name))) {
             values.push(parseInt(card.name))
          } else if(card.name === "Jack" || card.name === "Queen" || card.name === "King") {
              values.push(10)
          } else if (card.name === "Ace") {
              values.push(0)
          }
      })

      hand.forEach(function(card){
        if(card.name === "Ace"){
          let subTotal = values.reduce((sum, value) => sum + value)
            if (subTotal > 10) {
              values.push(1)
            }
            else if (subTotal < 10) {
              values.push(11)
            }
         }
        })
      return values.reduce((sum, value) => sum + value)
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

export default Dealer;