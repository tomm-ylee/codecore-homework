// Create the nodes for the letters that users can click
const az = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const alphabetContainer = document.querySelector('#alphabet-container');
for (let letter of az) {
  const letterNode = document.createElement('div');
  alphabetContainer.append(letterNode);
  letterNode.outerHTML = `<div class="letter-box" id="${letter}"">${letter}</div>`;
}

// Stretch: Generate the mystery phrase randomly from a preset array
function randomIndex (number) {
  return Math.floor(Math.random() * number)
};
const wordList = [
  'STRANGLER', 'WATERMELON', 'CODECORE', 'NEW YORK', 'NAGGERS', 'JAMES BOND', 'VANCOUVER'
]
const keyWord = wordList[randomIndex(wordList.length)].split('');

// Create the nodes for the phrase.
const resultsDisplay = document.querySelector('#results-display');
for (let letter of keyWord) {
  const letterNode = document.createElement('div');
  letterNode.classList.add('result-letter');
  if (letter === ' ') letterNode.classList.add('space');
  resultsDisplay.append(letterNode);
}

let remainingMistakes = 6;

// Add the event listeners for only the letter-box divs.
// - Mouseenter, highlight the letter
// - Mouseleave, unhighlight the letter
// - Click, check if the letter has been guessed before. If not, declare it guessed,
// then evaluate the guessed letter.


document.querySelectorAll('.letter-box').forEach( node => {
  node.addEventListener('mouseenter', event => {
    event.currentTarget.classList.add('highlight');
  });
  node.addEventListener('mouseleave', event => {
    event.currentTarget.classList.remove('highlight');
  });
  node.addEventListener('click', event => {
    if (!event.currentTarget.matches('.guessed')) {
      event.currentTarget.classList.add('guessed');
      checkLetter(event.currentTarget.innerHTML);
    }
  });
});

// Function to check if it was a letter guess is good or not. If it was not
// correct, update the image. Then check if the user won or lost, and give the
// appropriate alert/sound.

function checkLetter(guessedLetter) {
  let correct = false;
  let winState = true;
  for (let i = 0; i < keyWord.length; i += 1) {
    const keyWordLetterNode = resultsDisplay.querySelector(`:nth-child(${i + 1})`)
    if (keyWord[i] === `${guessedLetter}`) {
      correct = true
      keyWordLetterNode.innerHTML = guessedLetter;
      keyWordLetterNode.classList.add('correct');
    }
    if (!keyWordLetterNode.matches('.correct, .space')) winState = false;
  }

  if (correct === false) {
    remainingMistakes -= 1;
    document.querySelector('#mistakes-count-indicator').innerHTML = `${remainingMistakes} Mistakes until Judgement`
    document.querySelector('#gallow-img').setAttribute('src', `hangman-assets/gallows-${remainingMistakes}.jpg`)
  }

  if (remainingMistakes === 0) {
    new Audio(`hangman-assets/lose.wav`).play()
    setTimeout(() => {
      if (!alert("Fatality, try again with the next one")) window.location.reload();
    }, 500);
  }

  if (winState) {
    new Audio(`hangman-assets/win.wav`).play()
    setTimeout(() => {
      if (!alert("Savior! Now save the next one")) window.location.reload();
    }, 500);
  }
}

// Stretch: Add the event listener to the document for keydown. To do similar things as the click event listener.
document.addEventListener('keydown', event => {
  const typedLetter = event.key.toUpperCase()
  console.log(typedLetter);
  if (az.includes(typedLetter)) {
    const letterNode = document.querySelector(`#${typedLetter}`)
    if (!letterNode.matches('.guessed')) {
      letterNode.classList.add('guessed');
      checkLetter(typedLetter);
    }
  }
});
