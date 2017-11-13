describe("Card", function() {
    var Card = require('../src/Card')
    var Deck = require('../src/Deck')
    var Player = require('../src/Player')
    var card
    var card2
    var deck
    var player
  
    beforeEach(function() {
      card = new Card("Hearts","4")
      card2 = new Card("Spades", "King")
      player = new Player
      deck = new Deck
    });

    it("should have a value of 14", function() {
      player.hand = [card1, card2]
      expect(player.valueCalc(player.hand)).toEqual(14)
    });
    
    it("should have a name", function() {
        player.hand = [card1, card2]
        player.resetHand()
        expect(player.hand.length).toEqual(0)
      });

    it("should draw a card and place it in the hand", function() {
      player.resetHand()
      deck.generate()
      deck.shuffle(deck.cards)
      player.hit(deck.cards)
      expect(player.hand.length).toEqual(1)
    });

    it("should draw two card and place it in the hand", function() {
        player.resetHand()
        deck.generate()
        deck.shuffle(deck.cards)
        player.deal(deck.cards)
        expect(player.hand.length).toEqual(2)
    });

    it("should change turn to true", function() {
        player.setTurn()
        expect(player.turn).toEqual(true)
    });

    it("should change turn to false", function() {
        player.setTurn()
        player.passTurn()
        expect(player.turn).toEqual(false)
    });
});