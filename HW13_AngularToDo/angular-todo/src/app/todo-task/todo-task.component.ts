import { Component, OnInit } from '@angular/core';
import { ToDo } from "../task";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {
  firstComponent = 'TodoTaskComponent';
  tasks: ToDo = {
    id: 1,
    status: true,
    taskText: 'This is defaults text in the todo-task.components'
};

  constructor() { }

  ngOnInit() {
  }
}
