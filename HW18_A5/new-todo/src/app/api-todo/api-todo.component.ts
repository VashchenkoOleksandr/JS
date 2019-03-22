import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoItem';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-api-todo',
  template: `
  <li *ngFor="let TodoItem of todoItem">
    <p>ID: {{TodoItem?.id}}</p>
    <p>Title: {{TodoItem?.title}}</p>
    <p>DueDate: {{TodoItem?.dueDate}}</p>
    <p>Responsible: {{TodoItem?.responsible}}</p>
    <p>Status: {{TodoItem?.status}}</p>
  </li>`,
  providers: [HttpService],
  styleUrls: ['./api-todo.component.scss']
})
export class ApiTodoComponent implements OnInit {

  todoItem: TodoItem[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe(data => this.todoItem = data["taskList"]);
  }

}
