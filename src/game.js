import Deck from './deck.js';
import Player from './player.js';


document.addEventListener("DOMContentLoaded", function(event) {

  let startButton = document.getElementById("start-button");
  let playerDiv = document.getElementById('player-board');
  let dealerDiv = document.getElementById('dealer-board');
  let headers = document.getElementsByTagName('h2');
  let hitButton = document.getElementById("hit-button");
  let stayButton = document.getElementById("stay-button");
  let roundButton = document.getElementById("another-round-button");
  let nopeButton = document.getElementById("nope-button");
  let choiceDiv = document.getElementById("choices-div");
  let roundCount = 0
  let playerWin = 0
  let draws = 0
  let playerHitcount = 0
  let dealerHitcount = 0

  let player = new Player
  let dealer = new Player


  startButton.addEventListener('click', function(){
   startButton.style.display = "none";
   headers[0].style.display = "block";
   headers[1].style.display = "block";

   let deck = new Deck
   
   deck.generate()
   deck.shuffle(deck.cards)
   console.log(deck.cards)


   dealer.deal(deck.cards)
   player.deal(deck.cards)

   playerHitcount = 0
   dealerHitcount = 0

   console.log(headers[0])
   roundCount += 1
   console.log(roundCount)
  

   // When game starts 
   // create deck
   // shuffle deck

  // create dealer object
  // give hand
   
   let cardHand = document.createElement("p");
   cardHand.appendChild(document.createTextNode(dealer.hand.length + " CARDS "))

   dealerDiv.appendChild(cardHand)

  // create player object
  // give hand

   let playerHandfirst = document.createElement("p");
   let playerHandsecond = document.createElement("p");
   playerHandfirst.appendChild(document.createTextNode(player.hand[0].name + " of " + player.hand[0].suit))
   playerHandsecond.appendChild(document.createTextNode(player.hand[1].name + " of " + player.hand[1].suit))

   playerDiv.appendChild(playerHandfirst)
   playerDiv.appendChild(playerHandsecond)

  // create loop here
  // dealer logic: will hit until 18 or higher
  // player: can choose to hit or stay
  // result will be determined when player stays and dealer is at 18 or higher
  // after loop will run valueCalc on both hands, the higher value is declared winner, if player wins, win count will increase by one, round count will always increase by one. 

  
  console.log(dealer.valueCalc(dealer.hand))
  console.log(dealer.valueCalc(player.hand))

 let winCondition = function(){
  if(dealer.turn == false && player.turn == false && dealer.valueCalc(dealer.hand) >= 18){
    console.log('HEEERRRREEE!!!!!!')
      if(dealer.valueCalc(dealer.hand) > 21 && player.valueCalc(player.hand) > 21){
        alert("DRAW")
        choiceDiv.style.display = "block"

        roundButton.addEventListener('click', function() {
            player.resetHand()
            dealer.resetHand()
            startButton.style.display = "block";
            choiceDiv.style.display = "none";
            hitButton.style.display = "none";
            stayButton.style.display = "none";
        });

        nopeButton.addEventListener('click', function() {
            console.log("I'M DONE")
        });
      } else if(dealer.valueCalc(dealer.hand) > 21 && player.valueCalc(player.hand) <= 21){
        alert("YOU WIN")
        playerWin += 1
        choiceDiv.style.display = "block"

        roundButton.addEventListener('click', function() {
            player.resetHand()
            dealer.resetHand()
            startButton.style.display = "block";
            choiceDiv.style.display = "none";
            hitButton.style.display = "none";
            stayButton.style.display = "none";
        });

        nopeButton.addEventListener('click', function() {
            console.log("I'M DONE")
        });

      } else if(player.valueCalc(player.hand) > 21 && dealer.valueCalc(dealer.hand) <= 21){
        alert("YOU LOSE")
        choiceDiv.style.display = "block"

        roundButton.addEventListener('click', function() {
            player.resetHand()
            dealer.resetHand()
            startButton.style.display = "block";
            choiceDiv.style.display = "none";
            hitButton.style.display = "none";
            stayButton.style.display = "none";
        });

        nopeButton.addEventListener('click', function() {
            console.log("I'M DONE")
        });

      } else if(dealer.valueCalc(dealer.hand) > player.valueCalc(player.hand) && dealer.valueCalc(dealer.hand) <= 21) {
        alert("YOU LOSE")
        choiceDiv.style.display = "block"

        roundButton.addEventListener('click', function() {
            player.resetHand()
            dealer.resetHand()
            startButton.style.display = "block";
            choiceDiv.style.display = "none";
            hitButton.style.display = "none";
            stayButton.style.display = "none";
        });

        nopeButton.addEventListener('click', function() {
            console.log("I'M DONE")
        });

      } else if (dealer.valueCalc(dealer.hand) < player.valueCalc(player.hand)&& player.valueCalc(player.hand) <= 21){
        alert("YOU WIN")
        playerWin += 1
        choiceDiv.style.display = "block"

        roundButton.addEventListener('click', function() {
            player.resetHand()
            dealer.resetHand()
            startButton.style.display = "block";
            choiceDiv.style.display = "none";
            hitButton.style.display = "none";
            stayButton.style.display = "none";
        });

        nopeButton.addEventListener('click', function() {
            console.log("I'M DONE")
        });
     
      } else if (dealer.valueCalc(dealer.hand) === player.valueCalc(player.hand)){
        alert("DRAW")
        draws += 1
        choiceDiv.style.display = "block"

        roundButton.addEventListener('click', function() {
            player.resetHand()
            dealer.resetHand()
            startButton.style.display = "block";
            choiceDiv.style.display = "none";
            hitButton.style.display = "none";
            stayButton.style.display = "none";
        });

        nopeButton.addEventListener('click', function() {
            console.log("I'M DONE")
        });
  
     }


  } 
 }  
  
  if (dealer.valueCalc(dealer.hand) < 18){
      hitButton.style.display = "block";
      stayButton.style.display = "block";
  
      hitButton.addEventListener('click', function() {
       player.setTurn()
       playerHitcount += 1
       let playerIndex = playerHitcount + 1
       player.hit(deck.cards)

       let playerNewhand = document.createElement("p");
       console.log(playerHitcount)
       console.log(playerIndex)
       console.log(player.hand[playerIndex])
       playerNewhand.appendChild(document.createTextNode(player.hand[playerIndex].name + " of " + player.hand[playerIndex].suit))
       playerDiv.appendChild(playerNewhand)
       
       player.passTurn()

       dealer.setTurn()
 
       if(dealer.valueCalc(dealer.hand) < 18 && dealer.turn === true){
         console.log(dealer.hand.length)
         dealerHitcount += 1
         dealer.hit(deck.cards)
         console.log("NEW HAND")
         console.log(dealer.hand.length)
         let cardHand = document.createElement("p");
         cardHand.appendChild(document.createTextNode(dealer.hand.length + " CARDS "))
      
         dealerDiv.appendChild(cardHand)
         dealer.passTurn()
       }
      });
      
      stayButton.addEventListener('click', function() {
        player.setTurn()
        player.passTurn()
        console.log(player.hand)
        console.log(dealer.valueCalc(dealer.hand))
        console.log(player.turn)

        dealer.setTurn()
  
        if(dealer.valueCalc(dealer.hand) < 18 && dealer.turn === true){
          console.log(dealer.hand.length)
          dealerHitcount += 1
          dealer.hit(deck.cards)
          console.log("NEW HAND")
          console.log(dealer.hand.length)
          let cardHand = document.createElement("p");
          cardHand.appendChild(document.createTextNode(dealer.hand.length + " CARDS "))
       
          dealerDiv.appendChild(cardHand)
          dealer.passTurn()
        }
        winCondition()
      });
      
  } else if(dealer.valueCalc(dealer.hand) >= 18){
    dealer.passTurn()
    hitButton.style.display = "block";
    stayButton.style.display = "block";
    
    hitButton.addEventListener('click', function() {
      player.setTurn()
      playerHitcount += 1
      let playerIndex = playerHitcount + 1
      console.log(playerHitcount);
      console.log(playerIndex);
      console.log(player.hand[playerIndex]);
      player.hit(deck.cards)

      let playerNewhand = document.createElement("p");
      playerNewhand.appendChild(document.createTextNode(player.hand[playerIndex].name + " of " + player.hand[playerIndex].suit))
      playerDiv.appendChild(playerNewhand)
      
      player.passTurn()
      console.log(player.turn)
      console.log(dealer.valueCalc(dealer.hand))
     });
     
     stayButton.addEventListener('click', function() {
       player.setTurn()
       player.passTurn()
       console.log(player.turn)
       winCondition()
     });
    }
 });
});
  

