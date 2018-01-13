//First Homework Assignment

/* This script attemps to mimic the functionality of Trello. An object "hello"
will be used to test the script.

The function createBoard allows users to input more boards,

Finally, the function listBoards lists out all the board names.
*/

//Initial object with all boards and their items. This will be modified as
//users modifiy boards.

const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    }
};

//Function to display just the current board names.

function listBoards () {
  console.log("-".repeat(18));
  let count = 1;
  for (let boardName in hello) {
    console.log(`${count}- ${boardName}`);
    console.log("-".repeat(18));
    count += 1;
  }
}

// Function to add new, blank board (as object). If already existing, say so.

function addBoard (boardName) {
  if (hello[boardName] === undefined) {
    hello[boardName] = {};
    console.log(`Board '${boardName}'' was created.`);
  } else {
    console.log("Board already exists.");
  }
  return;
}

// Function to delete board. If not existing, say so.

function deleteBoard (boardName) {
  if (hello[boardName] === undefined) {
    console.log(`Board doesn't exist.`);
  } else {
    delete hello[boardName];
    console.log(`Board '${boardName}' was removed.`);
  }
  return;
}

//Function to diplay an existing board, including all lists and items in list.
//If not existing, say so.

function displayBoard (boardName) {
  if (hello[boardName] === undefined) {
    console.log(`Board doesn't exist.`);
  } else {
    for (let listName in hello[boardName]) {
      console.log("-".repeat(18));
      console.log(` ${listName}`);
      console.log("-".repeat(18));
      for (let cardName of hello[boardName][listName]){
        console.log(`>  ${cardName}`);
      }
    }
    console.log("-".repeat(18));
  }
  return;
}

// Function to create a new, blank list (as an array) in board as named in first
// argument. If board doesn't exist or list already exists within that board,
// say so.

function createList (boardName, listName) {
  if (hello[boardName] === undefined) {
    console.log(`Board doesn't exist.`);
    return;
  }

  if (hello[boardName][listName] === undefined) {
    hello[boardName][listName] = [];
    console.log(`List was created.`);
    return;
  }

  console.log("List name already exists.");
  return;
}

// Function to create a new card (as a string) in list of board, as
// specified in first two argument. If board or list doesn't exist, or card
// already exists within that board, say so.

function createCard (boardName, listName, cardName) {
  if (hello[boardName] === undefined) {
    console.log(`Board doesn't exist.`);
    return;
  }

  if (hello[boardName][listName] === undefined) {
    console.log(`List doesn't exist in board.`);
    return;
  }

  hello[boardName][listName].push(cardName);
  console.log("Card added.");

  return;
  }

// Function to delete a list within a board. If neither exist, say so and
// return out of function.

function removeList (boardName, listName) {
  if (hello[boardName] === undefined) {
    console.log(`Board doesn't exist.`);
    return;
  }

  if (hello[boardName][listName] === undefined) {
    console.log(`List doesn't exist.`);
    return;
  }

  delete hello[boardName][listName];
  console.log("List was removed");

  return;
}

// Function to delete a card by the index of a list. If neither board or list
// exist, say so and return out of function.

function removeCard (boardName, listName, cardIndex) {
  if (hello[boardName] === undefined) {
    console.log(`Board doesn't exist.`);
    return;
  }

  if (hello[boardName][listName] === undefined) {
    console.log(`List doesn't exist.`);
    return;
  }

  fullList = hello[boardName][listName]
  hello[boardName][listName] = fullList.slice(0, cardIndex).concat(fullList.slice(cardIndex+1, fullList.length));

  console.log("Card was removed");
  return;
}

//Function to move card from one list to another list of the same board.
// If any of the specified lists or boards do not exist, say so and return out.

function moveCard (boardName, fromList, toList, fromCardIndex, toCardIndex) {
  if (hello[boardName] === undefined) {
    console.log(`Board doesn't exist.`);
    return;
  }

  if (hello[boardName][fromList] === undefined || hello[boardName][toList] === undefined) {
    console.log(`A specified list doesn't exist.`);
    return;
  }

  if (hello[boardName][fromList][fromCardIndex] === undefined) {
    console.log(`Card doesn't exist at index.`);
    return;
  }

  hello[boardName][toList][toCardIndex] = hello[boardName][fromList][fromCardIndex];

  fullList = hello[boardName][fromList]
  hello[boardName][fromList] = fullList.slice(0, fromCardIndex).concat(fullList.slice(fromCardIndex+1, fullList.length))

  console.log(`Card moved.`);
  return;
}

displayBoard("Tester Board");
addBoard("New Board");
deleteBoard("Dream");
createList("Dreams", "Death List")
createCard("Dreams", "Death List", "Batman")
removeList("Dreams", "Bunk List")
removeCard("Tester Board", "Doing", 1);
removeCard("Tester Board", "Doing", 1);
moveCard("Tester Board", "Doing", "Done", 1, 1);
displayBoard("Tester Board");
listBoards()
