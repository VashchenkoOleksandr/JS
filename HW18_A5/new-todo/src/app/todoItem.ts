export class TodoItem {
  id?: string;
  title: string;
  responsible: string;
  dueDate: Date;
  status: string;
}

export const TodoAPI = {todoApi: 'https://api.todo-list.kotoblog.pp.ua/tasks/'};
