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


// create player object
// give hand

let player = new Player

// create loop here
// dealer logic: will hit until 18 or higher


// player: can choose to hit or stay


// result will be determined when player stays and dealer is at 18 or higher
// end condition is player.turn == false && dealer.turn == false

  });
  

