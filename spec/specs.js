describe('pigLatin', function() {
  it("adds 'ay' to words that begin with a vowel", function () {
    expect(pigLatin("andrew")).to.equal("andreway")
  });

  it("adds 'ay' plus the first letter to words that begin with a consonant", function () {
    expect(pigLatin("taco")).to.equal("acotay")
  });

  it("adds 'ay' plus the letters before a vowel to the end of that word", function () {
    expect(pigLatin("street")).to.equal("eetstray")
  });

  it("handles special case of qu", function () {
    expect(pigLatin("squeak")).to.equal("eaksquay")
  });

  it("adds appropriate letters plus 'ay' to each word in a sentence", function () {
    expect(pigLatin("The mouse squeaks")).to.equal("ethay ousemay eakssquay")
  });
});
