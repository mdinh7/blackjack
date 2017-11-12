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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deck_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dealer_js__ = __webpack_require__(4);




document.addEventListener("DOMContentLoaded", function (event) {

  // When game starts 
  // create deck
  // shuffle deck
  let roundCount = 0;
  let playerWin = 0;

  let deck = new __WEBPACK_IMPORTED_MODULE_0__deck_js__["a" /* default */]();

  deck.generate();
  console.log(deck.cards);
  // deck.shuffle()

  // create dealer object
  // give hand

  let dealer = new __WEBPACK_IMPORTED_MODULE_2__dealer_js__["a" /* default */]();
  dealer.deal(deck.cards);

  // create player object
  // give hand

  let player = new __WEBPACK_IMPORTED_MODULE_1__player_js__["a" /* default */]();
  player.deal(deck.cards);

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

  startButton.addEventListener('click', function () {
    while (dealer.valueCalc(dealer.hand) < 18) {
      player.setTurn();

      hitButton.addEventListener('click', function () {
        player.hit(deck);
        player.passTurn();
      });

      stayButton.addEventListener('click', function () {
        player.passTurn();
      });

      dealer.setTurn();
      dealer.hit(deck);
      dealer.passTurn();
    }
  });

  if (dealer.turn === false && player.turn === false) {
    // Dealer Win, Player Win, and Draw conditions
    if (dealer.valueCalc(dealer.hand) > player.valueCalc(player.hand)) {} else if (dealer.valueCalc(dealer.hand) < player.valueCalc(player.hand)) {} else {}
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_js__ = __webpack_require__(2);


class Deck {
  constructor() {
    this.cards = [];
  }

  //creates initial deck
  generate() {
    let playingDeck = this.cards;
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    let type = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < type.length; j++) {
        let playingCard = new __WEBPACK_IMPORTED_MODULE_0__card_js__["a" /* default */](suits[i], type[j]);
        playingDeck.push(playingCard);
      }
    }
    this.cards = playingDeck;
    return this.cards;
  }

  //shuffles deck
  shuffle(deck) {}
}

/* harmony default export */ __webpack_exports__["a"] = (Deck);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Card {
    constructor(suit, name) {
        this.suit = suit;
        this.name = name;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Player {
    constructor() {
        this.hand = [];
        this.turn = false;
    }

    valueCalc(hand) {
        let values = [];
        hand.forEach(function (card) {
            if (Number.isInteger(parseInt(card.name))) {
                values.push(parseInt(card.name));
            } else if (card.name === "Jack" || card.name === "Queen" || card.name === "King") {
                values.push(10);
            } else if (card.name === "Ace") {
                values.push(0);
            }
        });

        hand.forEach(function (card) {
            if (card.name === "Ace") {
                let subTotal = values.reduce((sum, value) => sum + value);
                if (subTotal > 10) {
                    values.push(1);
                } else if (subTotal < 10) {
                    values.push(11);
                }
            }
        });
        return values.reduce((sum, value) => sum + value);
    }

    //adds card to hand, sets turn to true

    hit(deck) {
        let drawnCard = deck.pop();
        console.log(drawnCard);
        this.hand.push(drawnCard);
        console.log(this.hand);
    }

    deal(deck) {
        this.hit(deck);
        this.hit(deck);
    }

    //sets turn to true
    setTurn() {
        this.turn = true;
    }

    //sets turn to false
    passTurn() {
        this.turn = false;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Dealer {
  constructor() {
    this.hand = [];
    this.turn = false;
  }

  //uses valueCalc to calculate value of hand, based on that hit will either take a card or will stay.

  valueCalc(hand) {
    let values = [];
    hand.forEach(function (card) {
      if (Number.isInteger(parseInt(card.name))) {
        values.push(parseInt(card.name));
      } else if (card.name === "Jack" || card.name === "Queen" || card.name === "King") {
        values.push(10);
      } else if (card.name === "Ace") {
        values.push(0);
      }
    });

    hand.forEach(function (card) {
      if (card.name === "Ace") {
        let subTotal = values.reduce((sum, value) => sum + value);
        if (subTotal > 10) {
          values.push(1);
        } else if (subTotal < 10) {
          values.push(11);
        }
      }
    });
    return values.reduce((sum, value) => sum + value);
  }

  hit(deck) {
    let drawnCard = deck.pop();
    console.log(drawnCard);
    this.hand.push(drawnCard);
    console.log(this.hand);
  }

  //sets turn to true
  setTurn() {
    this.turn = true;
  }

  //sets turn to false
  passTurn() {
    this.turn = false;
  }

  deal(deck) {
    this.hit(deck);
    this.hit(deck);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Dealer);

/***/ })
/******/ ]);