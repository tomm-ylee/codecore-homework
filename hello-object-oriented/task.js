class Task {
  constructor(toDo, assignee = null) {
    this.toDo = toDo;
    this.assignee = assignee;
  }

  render() {
    if (this.assignee === null) {
      return this.toDo;
    } else {
      return this.toDo + " • " + this.assignee;
    }
  }
}

const myTask = new Task('Clean dishes');
const myTaskWithAssignee = new Task('Wash clothes', 'You');

console.log(myTask.render());
console.log(myTaskWithAssignee.render());

class List {
  constructor
}

// class List {
//   function constructor () {
//
//   }
//
//   function listBoards () {
//     console.log("-".repeat(18));
//     let count = 1;
//     for (let boardName in hello) {
//       console.log(`${count}- ${boardName}`);
//       console.log("-".repeat(18));
//       count += 1;
//     }
//   }
//
//   function addBoard (boardName) {
//     if (hello[boardName] === undefined) {
//       hello[boardName] = {};
//       console.log(`Board '${boardName}'' was created.`);
//     } else {
//       console.log("Board already exists.");
//     }
//     return;
//   }
//
//   function deleteBoard (boardName) {
//     if (hello[boardName] === undefined) {
//       console.log(`Board doesn't exist.`);
//     } else {
//       delete hello[boardName];
//       console.log(`Board '${boardName}' was removed.`);
//     }
//     return;
//   }
//
//   function displayBoard (boardName) {
//     if (hello[boardName] === undefined) {
//       console.log(`Board doesn't exist.`);
//     } else {
//       for (let listName in hello[boardName]) {
//         console.log("-".repeat(18));
//         console.log(` ${listName}`);
//         console.log("-".repeat(18));
//         for (let cardName of hello[boardName][listName]){
//           console.log(`>  ${cardName}`);
//         }
//       }
//       console.log("-".repeat(18));
//     }
//     return;
//   }
//
//
//   function createList (boardName, listName) {
//     if (hello[boardName] === undefined) {
//       console.log(`Board doesn't exist.`);
//       return;
//     }
//
//     if (hello[boardName][listName] === undefined) {
//       hello[boardName][listName] = [];
//       console.log(`List was created.`);
//       return;
//     }
//
//     console.log("List name already exists.");
//     return;
//   }
//
//
//   function createCard (boardName, listName, cardName) {
//     if (hello[boardName] === undefined) {
//       console.log(`Board doesn't exist.`);
//       return;
//     }
//
//     if (hello[boardName][listName] === undefined) {
//       console.log(`List doesn't exist in board.`);
//       return;
//     }
//
//     hello[boardName][listName].push(cardName);
//     console.log("Card added.");
//
//     return;
//   }
//
//
//   function removeList (boardName, listName) {
//     if (hello[boardName] === undefined) {
//       console.log(`Board doesn't exist.`);
//       return;
//     }
//
//     if (hello[boardName][listName] === undefined) {
//       console.log(`List doesn't exist.`);
//       return;
//     }
//
//     delete hello[boardName][listName];
//     console.log("List was removed");
//
//     return;
//   }
//
//
//   function removeCard (boardName, listName, cardIndex) {
//     if (hello[boardName] === undefined) {
//       console.log(`Board doesn't exist.`);
//       return;
//     }
//
//     if (hello[boardName][listName] === undefined) {
//       console.log(`List doesn't exist.`);
//       return;
//     }
//
//     fullList = hello[boardName][listName]
//     hello[boardName][listName] = fullList.slice(0, cardIndex).concat(fullList.slice(cardIndex+1, fullList.length));
//
//     console.log("Card was removed");
//     return;
//   }
//
//
//   function moveCard (boardName, fromList, toList, fromCardIndex, toCardIndex) {
//     if (hello[boardName] === undefined) {
//       console.log(`Board doesn't exist.`);
//       return;
//     }
//
//     if (hello[boardName][fromList] === undefined || hello[boardName][toList] === undefined) {
//       console.log(`A specified list doesn't exist.`);
//       return;
//     }
//
//     if (hello[boardName][fromList][fromCardIndex] === undefined) {
//       console.log(`Card doesn't exist at index.`);
//       return;
//     }
//
//     hello[boardName][toList][toCardIndex] = hello[boardName][fromList][fromCardIndex];
//
//     fullList = hello[boardName][fromList]
//     hello[boardName][fromList] = fullList.slice(0, fromCardIndex).concat(fullList.slice(fromCardIndex+1, fullList.length))
//
//     console.log(`Card moved.`);
//     return;
//   }
//
// }
//
//
// const hello = {
//     'Tester Board': {
//       'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
//       'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
//       'Done': ['Laundry']
//     },
//     'Dreams': {
//       'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
//     }
// };
