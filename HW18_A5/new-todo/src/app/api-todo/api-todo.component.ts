import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoItem';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-api-todo',
  template: `
  <li *ngFor="let TodoItem of todoItem">
    ID: {{TodoItem?.id}} Title: {{TodoItem?.title}} DueDate: {{TodoItem?.dueDate}}
      Responsible: {{TodoItem?.responsible}} Status: {{TodoItem?.status}}
  </li>`,
  providers: [HttpService],
  styleUrls: ['./api-todo.component.scss']
})
export class ApiTodoComponent implements OnInit {

  todoItem: TodoItem[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe(data => this.todoItem = data['taskList']);
  }

}
