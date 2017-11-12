/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"deck.js\"");
throw new Error("Cannot find module \"player.js\"");
throw new Error("Cannot find module \"dealer.js\"");





document.addEventListener("DOMContentLoaded", function(event) {

// When game starts 
// create deck
// shuffle deck
  let roundCount = 0
  let playerWin = 0

  let deck = new __WEBPACK_IMPORTED_MODULE_0_deck_js___default.a

  deck.generate()
  console.log(deck.cards)
  // deck.shuffle()

// create dealer object
// give hand

  let dealer = new __WEBPACK_IMPORTED_MODULE_2_dealer_js___default.a
  dealer.deal(deck.cards)


// create player object
// give hand

  let player = new __WEBPACK_IMPORTED_MODULE_1_player_js___default.a
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
  



/***/ })
/******/ ]);