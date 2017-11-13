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



document.addEventListener("DOMContentLoaded", function (event) {

    let startButton = document.getElementById("start-button");
    let playerDiv = document.getElementById('player-board');
    let dealerDiv = document.getElementById('dealer-board');
    let headers = document.getElementsByTagName('h2');
    let hitButton = document.getElementById("hit-button");
    let stayButton = document.getElementById("stay-button");
    let roundButton = document.getElementById("another-round-button");
    let nopeButton = document.getElementById("nope-button");
    let choiceDiv = document.getElementById("choices-div");
    let roundCount = 0;
    let playerWin = 0;
    let draws = 0;
    let playerHitcount = 0;
    let dealerHitcount = 0;

    let player = new __WEBPACK_IMPORTED_MODULE_1__player_js__["a" /* default */]();
    let dealer = new __WEBPACK_IMPORTED_MODULE_1__player_js__["a" /* default */]();

    startButton.addEventListener('click', function () {
        player.resetHand();
        dealer.resetHand();
        startButton.style.display = "none";
        headers[0].style.display = "block";
        headers[1].style.display = "block";

        let deck = new __WEBPACK_IMPORTED_MODULE_0__deck_js__["a" /* default */]();

        deck.generate();
        deck.shuffle(deck.cards);
        console.log(deck.cards);

        dealer.deal(deck.cards);
        player.deal(deck.cards);

        playerHitcount = 0;
        dealerHitcount = 0;

        console.log(headers[0]);
        roundCount += 1;
        console.log(roundCount);

        // When game starts 
        // create deck
        // shuffle deck

        // create dealer object
        // give hand

        let cardHand = document.createElement("p");
        cardHand.appendChild(document.createTextNode(dealer.hand.length + " CARDS "));

        dealerDiv.appendChild(cardHand);

        // create player object
        // give hand

        let playerHandfirst = document.createElement("p");
        let playerHandsecond = document.createElement("p");
        playerHandfirst.appendChild(document.createTextNode(player.hand[0].name + " of " + player.hand[0].suit));
        playerHandsecond.appendChild(document.createTextNode(player.hand[1].name + " of " + player.hand[1].suit));

        playerDiv.appendChild(playerHandfirst);
        playerDiv.appendChild(playerHandsecond);

        // create loop here
        // dealer logic: will hit until 18 or higher
        // player: can choose to hit or stay
        // result will be determined when player stays and dealer is at 18 or higher
        // after loop will run valueCalc on both hands, the higher value is declared winner, if player wins, win count will increase by one, round count will always increase by one. 


        console.log(dealer.valueCalc(dealer.hand));
        console.log(dealer.valueCalc(player.hand));

        let winCondition = function () {
            if (player.turn == false && dealer.valueCalc(dealer.hand) >= 18) {
                console.log('HEEERRRREEE!!!!!!');
                if (dealer.valueCalc(dealer.hand) > 21 && player.valueCalc(player.hand) > 21) {
                    alert("DRAW");
                    choiceDiv.style.display = "block";

                    roundButton.addEventListener('click', function () {
                        startButton.style.display = "block";
                        choiceDiv.style.display = "none";
                        hitButton.style.display = "none";
                        stayButton.style.display = "none";
                    });

                    nopeButton.addEventListener('click', function () {
                        console.log("I'M DONE");
                    });
                } else if (dealer.valueCalc(dealer.hand) > 21 && player.valueCalc(player.hand) <= 21) {
                    alert("YOU WIN");
                    playerWin += 1;
                    choiceDiv.style.display = "block";

                    roundButton.addEventListener('click', function () {
                        startButton.style.display = "block";
                        choiceDiv.style.display = "none";
                        hitButton.style.display = "none";
                        stayButton.style.display = "none";
                    });

                    nopeButton.addEventListener('click', function () {
                        console.log("I'M DONE");
                    });
                } else if (player.valueCalc(player.hand) > 21 && dealer.valueCalc(dealer.hand) <= 21) {
                    alert("YOU LOSE");
                    choiceDiv.style.display = "block";

                    roundButton.addEventListener('click', function () {
                        startButton.style.display = "block";
                        choiceDiv.style.display = "none";
                        hitButton.style.display = "none";
                        stayButton.style.display = "none";
                    });

                    nopeButton.addEventListener('click', function () {
                        console.log("I'M DONE");
                    });
                } else if (dealer.valueCalc(dealer.hand) > player.valueCalc(player.hand) && dealer.valueCalc(dealer.hand) <= 21) {
                    alert("YOU LOSE");
                    choiceDiv.style.display = "block";

                    roundButton.addEventListener('click', function () {
                        startButton.style.display = "block";
                        choiceDiv.style.display = "none";
                        hitButton.style.display = "none";
                        stayButton.style.display = "none";
                    });

                    nopeButton.addEventListener('click', function () {
                        console.log("I'M DONE");
                    });
                } else if (dealer.valueCalc(dealer.hand) < player.valueCalc(player.hand) && player.valueCalc(player.hand) <= 21) {
                    alert("YOU WIN");
                    playerWin += 1;
                    choiceDiv.style.display = "block";

                    roundButton.addEventListener('click', function () {
                        startButton.style.display = "block";
                        choiceDiv.style.display = "none";
                        hitButton.style.display = "none";
                        stayButton.style.display = "none";
                    });

                    nopeButton.addEventListener('click', function () {
                        console.log("I'M DONE");
                    });
                } else if (dealer.valueCalc(dealer.hand) === player.valueCalc(player.hand)) {
                    alert("DRAW");
                    draws += 1;
                    choiceDiv.style.display = "block";

                    roundButton.addEventListener('click', function () {
                        startButton.style.display = "block";
                        choiceDiv.style.display = "none";
                        hitButton.style.display = "none";
                        stayButton.style.display = "none";
                    });

                    nopeButton.addEventListener('click', function () {
                        console.log("I'M DONE");
                    });
                } else {
                    console.log(ERROR);
                }
            }
        };

        if (dealer.valueCalc(dealer.hand) < 18) {
            hitButton.style.display = "block";
            stayButton.style.display = "block";

            hitButton.addEventListener('click', function () {
                player.setTurn();
                playerHitcount += 1;
                let playerIndex = playerHitcount + 1;
                player.hit(deck.cards);

                let playerNewhand = document.createElement("p");
                console.log(playerHitcount);
                console.log(playerIndex);
                console.log(player.hand[playerIndex]);
                playerNewhand.appendChild(document.createTextNode(player.hand[playerIndex].name + " of " + player.hand[playerIndex].suit));
                playerDiv.appendChild(playerNewhand);

                player.passTurn();

                dealer.setTurn();

                if (dealer.valueCalc(dealer.hand) < 18 && dealer.turn === true) {
                    console.log(dealer.hand.length);
                    dealerHitcount += 1;
                    dealer.hit(deck.cards);
                    console.log("NEW HAND");
                    console.log(dealer.hand.length);
                    let cardHand = document.createElement("p");
                    cardHand.appendChild(document.createTextNode(dealer.hand.length + " CARDS "));

                    dealerDiv.appendChild(cardHand);
                    dealer.passTurn();
                }
            });

            stayButton.addEventListener('click', function () {
                player.setTurn();
                player.passTurn();
                console.log(player.hand);
                console.log(dealer.valueCalc(dealer.hand));
                console.log(player.turn);

                dealer.setTurn();

                if (dealer.valueCalc(dealer.hand) < 18 && dealer.turn === true) {
                    console.log(dealer.hand.length);
                    dealerHitcount += 1;
                    dealer.hit(deck.cards);
                    console.log("NEW HAND");
                    console.log(dealer.hand.length);
                    let cardHand = document.createElement("p");
                    cardHand.appendChild(document.createTextNode(dealer.hand.length + " CARDS "));

                    dealerDiv.appendChild(cardHand);
                    dealer.passTurn();
                }
                winCondition();
            });
        } else if (dealer.valueCalc(dealer.hand) >= 18) {
            dealer.passTurn();
            hitButton.style.display = "block";
            stayButton.style.display = "block";

            hitButton.addEventListener('click', function () {
                player.setTurn();
                playerHitcount += 1;
                let playerIndex = playerHitcount + 1;
                console.log(playerHitcount);
                console.log(playerIndex);
                console.log(player.hand[playerIndex]);
                player.hit(deck.cards);

                let playerNewhand = document.createElement("p");
                playerNewhand.appendChild(document.createTextNode(player.hand[playerIndex].name + " of " + player.hand[playerIndex].suit));
                playerDiv.appendChild(playerNewhand);

                player.passTurn();
                console.log(player.turn);
                console.log(dealer.valueCalc(dealer.hand));
            });

            stayButton.addEventListener('click', function () {
                player.setTurn();
                player.passTurn();
                console.log(player.turn);
                winCondition();
            });
        }
    });
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
        let suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
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
    shuffle(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
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
                } else if (subTotal <= 10) {
                    values.push(11);
                }
            }
        });
        return values.reduce((sum, value) => sum + value);
    }

    resetHand() {
        this.hand.length = 0;
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

/***/ })
/******/ ]);