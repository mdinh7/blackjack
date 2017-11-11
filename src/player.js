class Player {
    constructor(){
        this.hand = [];
        this.turn = false;
    }
    
    //adds card to hand, sets turn to true

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
}

export default class Player {}