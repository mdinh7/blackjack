import Deck from './deck.js';
import Player from './player.js';


document.addEventListener("DOMContentLoaded", function(event) {

  let startButton = document.getElementById("start-button");
  let playerDiv = document.getElementById('player-card');
  let dealerDiv = document.getElementById('dealer-card');
  let hiddenDiv = document.getElementById('dealer-hide');
  let headers = document.getElementsByTagName('h2');
  let hitButton = document.getElementById("hit-button");
  let stayButton = document.getElementById("stay-button");
  let roundButton = document.getElementById("another-round-button");
  let nopeButton = document.getElementById("nope-button");
  let choiceDiv = document.getElementById("choices-div");
  let dataTable = document.getElementById("data-table");
  let roundCount = 0
  let playerWin = 0
  let draws = 0
  let playerHitcount = 0
  let dealerHitcount = 0

  let player = new Player
  let dealer = new Player

  let deck = new Deck

  startButton.addEventListener('click', function(){

   // start of game, reset variables
   startButton.style.display = "none";
   headers[0].style.display = "block";
   headers[1].style.display = "block";
   playerHitcount = 0
   dealerHitcount = 0
   player.resetHand();
   dealer.resetHand();


   roundCount += 1
   console.log(roundCount)

   if(roundCount === 1){
     deck.generate()
     deck.shuffle(deck.cards)
     console.log(deck.cards)
   } else if (roundCount === 6) {
     deck.shuffle(deck.cards)
   } else {
     console.log("ROUND ERROR")
   }

   // deal cards and add to DOM

   dealer.deal(deck.cards)
   player.deal(deck.cards)

   // shows first card, puts hidden card as CARD 2
   let cardHand = document.createElement("p");
   let dealerHandfirst = document.createElement("p");
   dealerHandfirst.appendChild(document.createTextNode(dealer.hand[0].name + " of " + dealer.hand[0].suit))
   cardHand.appendChild(document.createTextNode("CARD " + dealer.hand.length))

   dealerDiv.appendChild(dealerHandfirst)
   dealerDiv.appendChild(cardHand)
   
   // places cards in hidden div to be shown later
   let hiddenHandfirst = document.createElement("p");
   let hiddenHandsecond = document.createElement("p");
   hiddenHandfirst.appendChild(document.createTextNode(dealer.hand[0].name + " of " + dealer.hand[0].suit))
   hiddenHandsecond.appendChild(document.createTextNode(dealer.hand[1].name + " of " + dealer.hand[1].suit))

   hiddenDiv.appendChild(hiddenHandfirst)
   hiddenDiv.appendChild(hiddenHandsecond)
   
   // shows players hand
   let playerHandfirst = document.createElement("p");
   let playerHandsecond = document.createElement("p");
   playerHandfirst.appendChild(document.createTextNode(player.hand[0].name + " of " + player.hand[0].suit))
   playerHandsecond.appendChild(document.createTextNode(player.hand[1].name + " of " + player.hand[1].suit))

   playerDiv.appendChild(playerHandfirst)
   playerDiv.appendChild(playerHandsecond)
  
   // reveal hit/stay buttons
   hitButton.style.display = "block";
   stayButton.style.display = "block";

  // dealer logic: will hit until 18 or higher
  // player: can choose to hit or stay
  // result will be determined when player stays and dealer is at 18 or higher
  // Will run valueCalc on both hands, the higher value is declared winner, if player wins, win count will increase by one, round count will always increase by one. 

  
  console.log(dealer.valueCalc(dealer.hand))
  console.log(dealer.valueCalc(player.hand))

 let winCondition = function(){
  if(player.turn == false && dealer.valueCalc(dealer.hand) >= 18){
    hiddenDiv.style.display = "block"
    dealerDiv.innerHTML = "";
    console.log(dealer.hand)
      if(dealer.valueCalc(dealer.hand) > 21 && player.valueCalc(player.hand) > 21){
        alert("DRAW")
        draws++
        choiceDiv.style.display = "block"

      } else if(dealer.valueCalc(dealer.hand) > 21 && player.valueCalc(player.hand) <= 21){
        alert("YOU WIN")
        playerWin++
        choiceDiv.style.display = "block"

      } else if(player.valueCalc(player.hand) > 21 && dealer.valueCalc(dealer.hand) <= 21){
        alert("YOU LOSE")
        choiceDiv.style.display = "block"


      } else if(dealer.valueCalc(dealer.hand) > player.valueCalc(player.hand) && dealer.valueCalc(dealer.hand) <= 21) {
        alert("YOU LOSE")
        choiceDiv.style.display = "block"


      } else if (dealer.valueCalc(dealer.hand) < player.valueCalc(player.hand)&& player.valueCalc(player.hand) <= 21){
        alert("YOU WIN")
        playerWin++
        choiceDiv.style.display = "block"
     
      } else if (dealer.valueCalc(dealer.hand) === player.valueCalc(player.hand)){
        alert("DRAW")
        draws++
        choiceDiv.style.display = "block"
      } else {
       console.log("WIN ERROR")
      }
    roundButton.addEventListener('click', resetStyle, true );
    nopeButton.addEventListener('click', finish, true);
    
    let row = dataTable.insertRow(1);
    var cellOne = row.insertCell(0);
    var cellTwo = row.insertCell(1);
    var cellThree = row.insertCell(2);
  
    cellOne.innerHTML = roundCount;
    cellTwo.innerHTML = playerWin +  " / " + (roundCount-playerWin-draws) + " / " + draws;
      
    let winPerc = playerWin/roundCount*100
    cellThree.innerHTML = winPerc + " % ";
    dataTable.style.display = "block";
    hitButton.removeEventListener('click',hitEvent, true );
    stayButton.removeEventListener('click', stayEvent, true);

  } 
 }  

  let resetStyle = function() {
    playerDiv.innerHTML = "";
    hiddenDiv.innerHTML = "";
    dealerDiv.innerHTML - "";
    hiddenDiv.style.display = "none";
    startButton.style.display = "block";
    choiceDiv.style.display = "none";
    hitButton.style.display = "none";
    stayButton.style.display = "none";
    dataTable.style.display = "none";
  }

  let finish = function() {
    dataTable.style.display = "block";
    alert("Thanks for playing! You won " + playerWin + " out of " + roundCount + " of your games!")
  }

  let hitEvent = function() {
    if (dealer.valueCalc(dealer.hand) < 18){
      player.setTurn()
      playerHitcount += 1
      let playerIndex = playerHitcount + 1
      player.hit(deck.cards)

      let playerNewhand = document.createElement("p");
      playerNewhand.appendChild(document.createTextNode(player.hand[playerIndex].name + " of " + player.hand[playerIndex].suit))
      playerDiv.appendChild(playerNewhand)
      
      player.passTurn()

      dealer.setTurn()

     if(dealer.valueCalc(dealer.hand) < 18 && dealer.turn === true){
        console.log(dealer.hand.length)
        dealerHitcount += 1
        let dealerIndex = dealerHitcount + 1
        dealer.hit(deck.cards)
        console.log("NEW HAND")
        console.log(dealer.hand.length)
        let cardHand = document.createElement("p");
        cardHand.appendChild(document.createTextNode("CARD " + dealer.hand.length))
        dealerDiv.appendChild(cardHand)

        let dealerHiddenHand = document.createElement("p");
        dealerHiddenHand.appendChild(document.createTextNode(dealer.hand[dealerIndex].name + " of " + dealer.hand[dealerIndex].suit))
        hiddenDiv.appendChild(dealerHiddenHand)
     
        dealer.passTurn()
      }
     } else if(dealer.valueCalc(dealer.hand) >= 18){
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
      }
   }
  
  let stayEvent = function() {
    if (dealer.valueCalc(dealer.hand) < 18){ 
      player.passTurn()
      dealer.setTurn()

      if(dealer.valueCalc(dealer.hand) < 18 && dealer.turn === true){
        console.log(dealer.hand.length)
        dealerHitcount += 1
        let dealerIndex = dealerHitcount + 1
        dealer.hit(deck.cards)
        console.log("NEW HAND")
        console.log(dealer.hand.length)
        let cardHand = document.createElement("p");
        cardHand.appendChild(document.createTextNode("CARD " + dealer.hand.length))

        let dealerHiddenHand = document.createElement("p");
        dealerHiddenHand.appendChild(document.createTextNode(dealer.hand[dealerIndex].name + " of " + dealer.hand[dealerIndex].suit))
        hiddenDiv.appendChild(dealerHiddenHand)
        
        dealerDiv.appendChild(cardHand)
        dealer.passTurn()
      }
    } else if(dealer.valueCalc(dealer.hand) >= 18){
       dealer.passTurn()
       player.passTurn()
       console.log(player.turn)
    }
    winCondition()
  }
  
  stayButton.addEventListener('click', stayEvent, true);
  hitButton.addEventListener('click', hitEvent, true );
 });
});
  

