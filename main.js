var characters = 'grumpywizardsmaketoxicbrewfortheevilqueenandjack'

var wordArray = []
for (var i = 0; i < characters.length; i++) {
  wordArray[i] = {
    letter: characters[i]
  }
}
console.log(wordArray)
