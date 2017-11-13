describe("Card", function() {
    var Card = require('../src/Card')
    var Deck = require('../src/Deck')
    var card
    var deck
    var deck2
  
    beforeEach(function() {
      card = new Card("Hearts","4")
      deck = new Deck
      deck2 = new Deck
    });

    it("should generate a deck", function() {
      deck.generate()
      expect(deck.cards.length).toEqual(52)
    });

    it("should shuffle the deck", function() {
      deck.generate()
      deck.shuffle(deck.cards)
      deck2.generate()
      expect(deck.cards).not.toEqual(deck2.cards)
    });
});