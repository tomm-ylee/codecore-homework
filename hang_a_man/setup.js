

const az = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const alphabetContainer = document.querySelector('#alphabet-container')
for (let letter of az) {
  let letterNode = document.createElement('div');
  alphabetContainer.append(letterNode)
  letterNode.outerHTML = `<div class="letter-box" id="${letter}""> ${letter} </div>`
}
