import {
  expText, tasks, tasksList, addNewTask,
} from './mToDo.mjs';
import doneTask from './doneTask.mjs';
import removeTask from './removeTask.mjs';

// Check import export status
if (expText(10) === 'READY') {
  console.log(`Import/export is ${expText(10)}!`);
} else {
  console.log(`Import/export is ${expText(null)}!`);
  console.log('Import/export have FAIL STATUS (Disconnect)!');
}

// debugger;

function todoInit() {
  for (const item of tasks.newTask) { createEl(item); }
  for (const item of tasks.allDone) { createEl(item); }
}

function createEl(todoElem) {
  const item = document.createElement('li');
  const text = document.createElement('span');
  const remove = document.createElement('div');

  text.classList.add('list-text');
  text.addEventListener('click', function () {
    doneTask(this);
  });

  remove.classList.add('list-remove');
  remove.addEventListener('click', function () {
    removeTask(this);
  });

  switch (todoElem.taskState) {
    case 'done':
      item.classList.add('list-item', 'list-item--done');
      break;
    default:
      item.classList.add('list-item');
      break;
  }
  text.innerHTML = todoElem.taskContent;
  item.appendChild(text);
  item.appendChild(remove);
  tasksList.appendChild(item);
}

addNewTask.addEventListener('click', function () {
  addTasks(this.value);
  // test value
  this.value = 'New task: ';
});

addNewTask.addEventListener('keyup', function (action) {
  if (action.keyCode === 13) {
    addTasks(this.value);
    // test value
    this.value = 'Do something: ';
  }
});

function addTasks(str) {
  const elem = {
    taskContent: str,
  };
  createEl(elem);
}

todoInit();
