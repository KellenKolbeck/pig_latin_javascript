describe('pigLatin', function() {
  it("adds 'ay' to words that begin with a vowel", function () {
    expect(pigLatin("andrew")).to.equal("andreway")
  });
});
