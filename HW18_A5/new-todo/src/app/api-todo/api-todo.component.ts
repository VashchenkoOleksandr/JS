import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoItem';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-todo',
  template: `
  <div>
    <p>ID: {{todoItem?.id}}</p>
    <p>Title: {{todoItem?.title}}</p>
    <p>DueDate: {{todoItem?.dueDate}}</p>
    <p>Responsible: {{todoItem?.responsible}}</p>
    <p>Status: {{todoItem?.status}}</p>
  </div>`,
  styleUrls: ['./api-todo.component.scss']
})
export class ApiTodoComponent implements OnInit {

  todoItem: TodoItem;

  private taskURL = 'http://localhost:4200/assets/task.json';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.taskURL).subscribe((data: TodoItem) => this.todoItem = data);
  }

}
