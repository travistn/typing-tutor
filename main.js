var characters = 'grumpy wizards make toxic brew for the evil queen and jack'

var wordArray = []
for (var i = 0; i < characters.length; i++) {
  var object = {
    letter: characters[i]
  }
  wordArray.push(object)
}

console.log(wordArray)

function renderOneCharacter(character) {
  var $oneLetter = document.createElement('span')
  $oneLetter.textContent = character.letter
  return $oneLetter
  }

renderOneCharacter(wordArray)
