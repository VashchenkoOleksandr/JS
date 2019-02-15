export function expText(x) {
  if (x === 10) {
    return 'READY';
  }
  return 'FAIL';
}

export const tasks = {
  newTask: [],
  allDone: [],
};

const tasksList = document.getElementById('todo_list');
const addNewTask = document.getElementById('add-task');

export {
  tasksList, addNewTask,
};
