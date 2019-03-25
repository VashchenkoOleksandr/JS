import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-api-todo',
  template: `
  <li *ngFor="let todo of todoItem">
    ID: {{todo?.id}} Title: {{todo?.title}} Responsible: {{todo?.responsible}} Date: {{todo?.dueDate}} Status: {{todo?.status}}
  </li>
  <button (click)="takeAllData()">Take new task</button>
  <button (click)="takeInProcess()">Take in process</button>
  <button (click)="takeDone()">Take done task</button>
  <li *ngFor="let todo of todoItems" [ngClass]="{'new': todo.status === 'new', 'process': todo.status === 'in process',
  'done': todo.status === 'done'}">
    ID: {{todo?.id}} Title: {{todo?.title}} responsible: {{todo?.responsible}} dueDate: {{todo?.dueDate}} status: {{todo?.status}}
  </li>
  `,
  providers: [HttpService],
  styleUrls: ['./api-todo.component.scss']
})
export class ApiTodoComponent implements OnInit {

  todoItem: TodoItem[] = [];
  todoItems: TodoItem[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe(data => this.todoItem = data);
  }

  takeAllData() {
    this.httpService.getNewData().subscribe(data => this.todoItems = data);
  }

  takeInProcess() {
    this.httpService.getInProcess().subscribe(data => this.todoItems = data);
  }

  takeDone() {
    this.httpService.getDone().subscribe(data => this.todoItems = data);
  }

}
