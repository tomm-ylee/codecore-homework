// Task class - A new object of this represents a task. Render method returns
// the task (and assignee if provided) as a string.

class Task {
  constructor(taskName, assignee = null) {
    this.taskName = taskName;
    this.assignee = assignee;
  }

  render() {
    if (this.assignee === null) {
      return this.taskName;
    } else {
      return this.taskName + " • " + this.assignee;
    }
  }
}

// Class List

class List {
  constructor(listName) {
    this.listName = listName;
    this.listOfTasks = [];
  }


  /* The entire 'for' block checks if the task being added already exists in the
  list. If there would be a repeating task name, the assignees would join
  together under the same task instead */
  addTask(newTaskObject) {
    for (let task of this.listOfTasks) {
      if (task.taskName === newTaskObject.taskName) {
        task.assignee = [task.assignee, newTaskObject.assignee].filter(x => x !==null).join(', ');
        if (task.assignee === "") task.assignee = null;
        return this;
      }
    }

    // These two lists of code would be good enough for most cases
    this.listOfTasks.push(newTaskObject);
    return this;
  }

  removeTask(taskName) {
    let outArray = this.listOfTasks.filter(taskObject => taskObject.taskName === taskName);
    if (outArray.length === 0) return null;
    this.listOfTasks = this.listOfTasks.filter(taskObject => taskObject.taskName !== taskName);
    return outArray[0];
  }

  render() {
    let renderThis = "\n|---------\n| " + this.listName + "\n|---------\n|";
    for (let i = 0; i < this.listOfTasks.length; i += 1) {
      renderThis += " " + i + "> " + this.listOfTasks[i].render() + "\n|"
    }
    return renderThis;
  }
}

// Board class

class Board {
  constructor(boardName) {
    this.boardName = boardName;
    this.listOfLists = [];
  }

  /* The entire outside 'for' block checks if the list being added already exists in the
  board. If there would be a repeating list name, the tasks would just combine
  under the same list instead. The Inside 'for' block leads the addTask method of
  of the Task class, which then makes sure we avoid repeated tasks.*/

  addList(newListObject) {
    for (let list of this.listOfLists) {
      if (list.listName === newListObject.listName) {
        for (let newListTask of newListObject.listOfTasks) {
          list.addTask(newListTask);
        }
        return this;
      }
    }

    // These two lists of code would be good enough for most cases
    this.listOfLists.push(newListObject);
    return this;
  }

  removeList(listName) {
    let outArray = this.listOfLists.filter(listObject => listObject.listName === listName);
    if (outArray.length === 0) return null;
    this.listOfLists = this.listOfLists.filter(listObject => listObject.listName !== listName);
    return outArray[0];
  }

  moveTaskTo(taskName, firstListName, secondListName) {
    let firstListObject = null;
    let secondListObject = null;

    for (let listObject of this.listOfLists) {
      if (listObject.listName === firstListName) {
        firstListObject = listObject;
      } else if (listObject.listName === secondListName) {
        secondListObject = listObject;
      }
    }
    if (firstListObject === null || secondListObject === null) return this;

    let testNull = firstListObject.removeTask(taskName);
    if (testNull !== null) secondListObject.addTask(testNull);

    return this;
  }

  render() {
    let renderThis = "\n************\n* " + this.boardName + " *\n************\n";
    for (let list of this.listOfLists) {
      renderThis += list.render();
    }
    return renderThis + "\n|---------\n";
  }
}

const toDoList = new List('To Do')
  .addTask(new Task('Laundry', 'You'))
  .addTask(new Task('Laundry', 'Me'))
  .addTask(new Task('Buy Apples'))
  .addTask(new Task('Pay Phone Bill', 'Me'));

const doingList = new List('Doing').addTask(new Task('Study JavaScript', 'Jill')).addTask(new Task('Study HTML', 'Jill')).addTask(new Task('Study Ruby', 'Me'));

const doneList = new List('Done')
  .addTask(new Task('Laundry'))
  .addTask(new Task('Ruby Exercises Homework', 'Everyone'));

const myBoard = new Board('Big Shiny Board')
  .addList(toDoList)
  .addList(doingList)
  .addList(doneList);


console.log(myBoard.render());

toDoList.listOfTasks[0].assignee = "Me"
myBoard.moveTaskTo('Laundry', 'To Do', 'Doing')
  .moveTaskTo('Buy Apples', 'To Do', 'Doing')
  .moveTaskTo('Random', 'To Do', 'Doing')
  .moveTaskTo('Buy Apples', 'Random', 'Doing')
  .moveTaskTo('Buy Apples', 'To Do', 'Random');

const doneList2 = new List('Done')
  .addTask(new Task('Rule the World'))
  .addTask(new Task('Move like Jagger'))
  .addTask(new Task('Ruby Exercises Homework', 'Not Me'));

myBoard.addList(doneList2)


console.log(myBoard.render());
