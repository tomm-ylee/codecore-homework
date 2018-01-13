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

// Function to add new, blank board (as object). If already existing, say so and return out.

function addBoard (boardName) {
  for (boardCheck in hello) {
    if (boardName === boardCheck) {
      console.log("Board already exists.");
      return;
    }
  }
  hello[boardName] = {};
  console.log(`Board '${boardName}'' was created.`);
  return;
}

// Function to delete board. If not existing, say so and return out.

function deleteBoard (boardName) {
  for (boardCheck in hello) {
    if (boardName === boardCheck) {
      delete hello[boardName];
      console.log(`Board '${boardName}' was removed.`);
      return;
    }
  }
  console.log(`Board doesn't exist.`);
  return;
}

//Function to diplay an existing board, including all lists and items in list.
//If not existing, say so and return out.

function displayBaord (boardName) {
  for (boardCheck in hello) {
    if (boardName === boardCheck) {
      for (listName in hello[boardName]) {
        console.log("-".repeat(18));
        console.log(` ${listName}`);
        console.log("-".repeat(18));
        for (cardName of hello[boardName][listName]){
          console.log(`>  ${cardName}`);
        }
      }
      console.log("-".repeat(18));
      return;
    }
  }
  console.log(`Board doesn't exist.`);
  return;
}

// Function to create a new, blank list (as an array) in board as named in first
// argument. If board doesn't exist or list already exists within that board,
// say so and return out of function.

function createList (boardName, listName) {
  for (boardCheck in hello) {
    if (boardName === boardCheck) {
      for (listCheck in hello[boardName]) {
        if (listName === listCheck) {
          console.log("List name already exists.");
          return;
        }
      }
      hello[boardName][listName] = [];
      console.log(`List was created.`);
      return
    }
  }
  console.log(`Board doesn't exist.`);
  return;
}

// Function to create a new card (as a string) in list of board, as
// specified in first two argument. If board or list doesn't exist, or card
// already exists within that board, say so and return out of function.

function createCard (boardName, listName, cardName) {
  for (boardCheck in hello) {
    if (boardName === boardCheck) {
      for (listCheck in hello[boardName]) {
        if (listName === listCheck) {
          hello[boardName][listName].push(cardName);
          console.log("Card added.");
          return;
        }
      }
      console.log(`List doesn't exist in board.`);
      return
    }
  }
  console.log(`Board doesn't exist.`);
  return;
}

// Function to delete a list within a board. If neither exist, say so and
// return out of function.

function removeList (boardName, listName) {
  for (boardCheck in hello) {
    if (boardName === boardCheck) {
      for (listCheck in hello[boardName]) {
        if (listName === listCheck) {
          delete hello[boardName][listName];
          console.log("List was removed");
          return;
        }
      }
      console.log(`List doesn't exist.`);
      return
    }
  }
  console.log(`Board doesn't exist.`);
  return;
}

// addBoard("New Board");
// deleteBoard("Dreams");
createList("Dreams", "Death List")
createCard("Dreams", "Death List", "Batman")
removeList("Dreams", "Bunk List")
displayBaord("Dreams");
