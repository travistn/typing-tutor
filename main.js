var applicationState = {
  wordArray: [],
  currentCharacter: 0,
  failures: 0
}

var characters = 'grumpy wizards make toxic brew for the evil queen and jack'


for (var i = 0; i < characters.length; i++) {
  var words = {
    letter: characters[i]
  }
  applicationState.wordArray.push(words)
}

function renderOneCharacter(character, index) {
  var $oneLetter = document.createElement('span')
  $oneLetter.textContent = character.letter
  if (index === applicationState.currentCharacter) {
    $oneLetter.classList.add('current-character')
    }
  else {
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

var $body = document.querySelector('div')

window.addEventListener('keydown', function(event) {
  if (event.key !== applicationState.wordArray[applicationState.currentCharacter]) {
    applicationState.failures += 1
  }
  $body.textContent = ''
  $body.appendChild(renderAllCharacters(applicationState.wordArray))
})
