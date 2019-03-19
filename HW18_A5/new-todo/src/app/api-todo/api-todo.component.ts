import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoItem';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-todo',
  templateUrl: './api-todo.component.html',
  styleUrls: ['./api-todo.component.scss']
})
export class ApiTodoComponent implements OnInit {

  constructor() { }
  
  getTask() {
    return this.http.get('https://api.todo-list.kotoblog.pp.ua/tasks' );
  }
  
  ngOnInit() {
  }

}
