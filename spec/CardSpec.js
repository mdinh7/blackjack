describe("Card", function() {
    var Card = require('../src/Card')
    var card
  
    beforeEach(function() {
      card = new Card("Hearts","4")
    });

    it("should have a suit", function() {
      expect(card.suit).toEqual("Hearts")
    });

    it("should have a name", function() {
      expect(card.name).toEqual("4")
    });
});