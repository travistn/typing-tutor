var applicationState = {
  wordArray: []
}

var characters = 'grumpy wizards make toxic brew for the evil queen and jack'


for (var i = 0; i < characters.length; i++) {
  var words = {
    letter: characters[i]
  }
  applicationState.wordArray.push(words)
}

function renderOneCharacter(character) {
  var $oneLetter = document.createElement('span')
  $oneLetter.classList.add('current-character')
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

renderAllCharacters(applicationState.wordArray)
