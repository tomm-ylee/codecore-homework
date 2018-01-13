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

// Prompt user for board name to be added
// const name = prompt('What is your name?');
// console.log(name);
function addBoard (newBoard) {
  for (nameCheck in hello) {
    if (newBoard === nameCheck) {
      console.log("Board already exists.");
      return;
    }
  }
  hello[newBoard] = [];
  console.log(`Board '${newBoard}'' was created.`);
  return;
}

function deleteBoard (oldBoard) {
  for (nameCheck in hello) {
    if (oldBoard === nameCheck) {
      delete hello[oldBoard];
      console.log(`Board '${oldBoard}' was removed.`);
      return;
    }
  }
  console.log(`Board doesn't exist.`);
  return;
}

addBoard("New Board");
deleteBoard("Dreams")

function listBoards () {
  console.log("-".repeat(18));
  let count = 1;
  for (let boardName in hello) {
    console.log(`${count}- ${boardName}`);
    console.log("-".repeat(18));
    count += 1;
  }
}

listBoards();
