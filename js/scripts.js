var pigLatin = function(string) {
  string = string.toLowerCase()
  var words = string.split(" ")
  var vowels = /[aeiou]/
  var allWords = []
  words.forEach(function(word) {
    if (vowels.test(word[0])) {
        word = word + "ay"
        allWords.push(word)
    }  else {
        var consonants = /[bcdfghjklmnp(qu)rstvwxyz]+/
        var firstConsonants = consonants.exec(word)
        word = word.replace(firstConsonants[0], "")
        word = word + firstConsonants[0] + "ay"
        allWords.push(word)
    }
   })
   return allWords.join(" ")
}


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var string = $("input#string").val();
    var result = pigLatin(string);

    $("#translated").text(result);
    $('#result').show()
  event.preventDefault()
});
});
