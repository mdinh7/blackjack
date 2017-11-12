import Deck from './deck.js';
import Player from './player.js';
import Dealer from './dealer.js';


document.addEventListener("DOMContentLoaded", function(event) {

// When game starts 
// create deck
// shuffle deck
  let roundCount = 0
  let playerWin = 0

  let deck = new Deck

  deck.generate()
  console.log(deck.cards)
  // deck.shuffle()

// create dealer object
// give hand

  let dealer = new Dealer
  dealer.deal(deck.cards)


// create player object
// give hand

  let player = new Player
  player.deal(deck.cards)

// create loop here
// dealer logic: will hit until 18 or higher
// player: can choose to hit or stay
// result will be determined when player stays and dealer is at 18 or higher
// end condition is player.turn == false && dealer.turn == false
// after loop will run valueCalc on both hands, the higher value is declared winner, if player wins, win count will increase by one, round count will always increase by one. 


  let hitButton = document.getElementsByID("hit-button");
  let stayButton = document.getElementsByID("stay-button");
  let startButton = document.getElementById("start-button");
  let playerDiv = document.getElementsByID("player-board");
  let dealerDiv = document.getElementById("dealer-board");

  startButton.addEventListener('click', function(){
     while(dealer.valueCalc(dealer.hand) < 18){
      player.setTurn()

      hitButton.addEventListener('click', function() {
        player.hit(deck)
        player.passTurn()
      });
    
      stayButton.addEventListener('click', function() {
        player.passTurn()
      });

     dealer.setTurn()
     dealer.hit(deck)
     dealer.passTurn()
    }
 })

if(dealer.turn === false && player.turn ===false){
  // Dealer Win, Player Win, and Draw conditions
  if(dealer.valueCalc(dealer.hand) > player.valueCalc(player.hand)) {
  
  } else if (dealer.valueCalc(dealer.hand) < player.valueCalc(player.hand)){
   
  } else {

  }
}

});
  

