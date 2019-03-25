import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-api-todo',
  template: `
  <p>It is works</p>
  <li *ngFor="let todo of todoItem">
    ID: {{todo?.id}} Title: {{todo?.title}} Title: {{todo?.responsible}} Title: {{todo?.dueDate}} Title: {{todo?.status}}
  </li>`,
  providers: [HttpService],
  styleUrls: ['./api-todo.component.scss']
})
export class ApiTodoComponent implements OnInit {

  todoItem: TodoItem[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getNewData().subscribe(data => this.todoItem = data);
  }

}
