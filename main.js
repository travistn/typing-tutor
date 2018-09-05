var applicationState = {
  wordArray: [],
  currentCharacter: 0,
}

var characters = 'grumpy wizards make toxic brew for the evil queen and jack'

for (var i = 0; i < characters.length; i++) {
  var words = {
    letter: characters[i],
    failures: 0
  }
  applicationState.wordArray.push(words)
}

function renderOneCharacter(character, index) {
  var $oneLetter = document.createElement('span')
  $oneLetter.textContent = character.letter
  if (index === applicationState.currentCharacter) {
    $oneLetter.classList.add('current-character')
    }
  if (index !== applicationState.currentCharacter) {
    $oneLetter.classList.add('failed')
  }
    return $oneLetter
  }

  function renderAllCharacters(characters) {
    var $allLetters = document.createElement('div')
    for (var i = 0; i < characters.length; i++) {
      var character = characters[i]
      $allLetters.appendChild(renderOneCharacter(character, i))
    }
    document.body.appendChild($allLetters)
  }

renderAllCharacters(applicationState.wordArray)

window.addEventListener('keydown', function(event) {
  var currentChar = applicationState.wordArray[applicationState.currentCharacter]
  if (event.key !== currentChar.letter ) {
    words.failures += 1
  }
  else {
    applicationState.currentCharacter += 1
  }
  document.body.textContent = ''
  document.body.appendChild(renderAllCharacters(applicationState.wordArray))
})
