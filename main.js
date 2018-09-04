var characters = 'grumpy wizards make toxic brew for the evil queen and jack'

var wordArray = []
for (var i = 0; i < characters.length; i++) {
  var words = {
    letter: characters[i]
  }
  wordArray.push(words)
}

function renderOneCharacter(character) {
  var $oneLetter = document.createElement('span')
  $oneLetter.textContent = character.letter
  return $oneLetter
  }

  function renderAllCharacters(characters) {
    var $allLetters = document.createElement('div')
    for (var i = 0; i < characters.length; i++) {
      var character = characters[i]
      $allLetters.appendChild(renderOneCharacter(character))
    }
    document.body.appendChild($allLetters)
  }

renderAllCharacters(wordArray)

var currentCharacter = wordArray.indexOf(words)

for (var i = 0; i < characters.length; i++) {
  var isTyped = {
    letter: characters[i],
    current: currentCharacter
  }
}

console.log(isTyped)
