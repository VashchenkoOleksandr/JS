import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoItem';
import { HttpService } from '../http.service';

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
  providers: [HttpService],
  styleUrls: ['./api-todo.component.scss']
})
export class ApiTodoComponent implements OnInit {

  todoItem: TodoItem;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe((data: TodoItem) => this.todoItem = data);
  }

}
