import Deck from 'deck';
import Player from 'player';
import Dealer from 'dealer';


document.addEventListener("DOMContentLoaded", function(event) { 
    // When game starts 

// create deck
// shuffle deck

let deck = new Deck

deck.generate()
console.log(deck.cards)
deck.shuffle()

// create dealer object
// give hand

let dealer = new Dealer
dealer.deal(deck)


// create player object
// give hand

let player = new Player
player.deal(deck)

// create loop here
// dealer logic: will hit until 18 or higher
// player: can choose to hit or stay
// result will be determined when player stays and dealer is at 18 or higher
// end condition is player.turn == false && dealer.turn == false

while(dealer.valueCalc(dealer.hand) < 18){
    player.setTurn()
    let hitButton = document.getElementsByID("hit-button");
    let stayButton = document.getElementsByID("stay-button");

    hitButton.addEventListener('click', function () {
      player.hit(deck)
      player.passTurn()
      });

    dealer.setTurn()
    dealer.hit(deck)
    dealer.passTurn()
}

  });
  

