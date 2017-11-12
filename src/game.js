import Deck from './deck.js';
import Player from './player.js';


document.addEventListener("DOMContentLoaded", function(event) {

  let startButton = document.getElementById("start-button");
  let playerDiv = document.getElementById('player-board');
  let dealerDiv = document.getElementById('dealer-board');
  let headers = document.getElementsByTagName('h2');
  let hitButton = document.getElementById("hit-button");
  let stayButton = document.getElementById("stay-button");


  startButton.addEventListener('click', function(){
   startButton.style.display = "none";
   headers[0].style.display = "block";
   headers[1].style.display = "block";

   console.log(headers[0])
  

   // When game starts 
   // create deck
   // shuffle deck

   let roundCount = 0
   let playerWin = 0

   let deck = new Deck

   deck.generate()
   deck.shuffle(deck.cards)
   console.log(deck.cards)

  // create dealer object
  // give hand

   let dealer = new Player
   dealer.deal(deck.cards)
   
   let cardHand = document.createElement("span");
   cardHand.appendChild(document.createTextNode(dealer.hand[0].name + " of " + dealer.hand[0].suit + " , " + dealer.hand[1].name + " of " + dealer.hand[1].suit))

   dealerDiv.appendChild(cardHand)

  // create player object
  // give hand

   let player = new Player
   player.deal(deck.cards)

   let playerHand = document.createElement("span");
   playerHand.appendChild(document.createTextNode(player.hand[0].name + " of " + player.hand[0].suit + " , " + player.hand[1].name + " of " + player.hand[1].suit))

   playerDiv.appendChild(playerHand)

  // create loop here
  // dealer logic: will hit until 18 or higher
  // player: can choose to hit or stay
  // result will be determined when player stays and dealer is at 18 or higher
  // end condition is player.turn == false && dealer.turn == false
  // after loop will run valueCalc on both hands, the higher value is declared winner, if player wins, win count will increase by one, round count will always increase by one. 

  
  console.log(dealer.valueCalc(dealer.hand))
  console.log(dealer.valueCalc(player.hand))


  if(dealer.valueCalc(dealer.hand) >= 18){
    dealer.passTurn()
    player.setTurn()
    hitButton.style.display = "block";
    stayButton.style.display = "block";
    
    hitButton.addEventListener('click', function() {
      player.hit(deck.cards)
      player.passTurn()
      console.log(player.hand)
     });
     
     stayButton.addEventListener('click', function() {
         player.passTurn()
         console.log(player.hand)
     });
  } else {
      player.setTurn()
      hitButton.style.display = "block";
      stayButton.style.display = "block";
  
      hitButton.addEventListener('click', function() {
       player.hit(deck.cards)
       player.passTurn()
       console.log(player.hand)
       dealer.setTurn()
      });
      
      stayButton.addEventListener('click', function() {
        player.passTurn()
        console.log(player.hand)
        dealer.setTurn()
      });
      
    if(dealer.valueCalc(dealer.hand) < 18 && dealer.turn === true){
      dealer.hit(deck.cards)
      console.log(dealer.hand)
      dealer.passTurn()
    }
  }


  //  if(dealer.turn === false && player.turn ===false){
  //    // Dealer Win, Player Win, and Draw conditions
  //   if(dealer.valueCalc(dealer.hand) > player.valueCalc(player.hand)) {
  
  //   } else if (dealer.valueCalc(dealer.hand) < player.valueCalc(player.hand)){
   
  //   } else {

  //  }
  // }
 });
});
  

