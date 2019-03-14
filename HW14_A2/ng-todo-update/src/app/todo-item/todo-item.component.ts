import { Component, OnInit } from '@angular/core';
import { TodoTaskComponent } from '../todo-task/todo-task.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss', '../todo-task/todo-task.component.scss']
})
export class TodoItemComponent extends TodoTaskComponent implements OnInit {

  constructor() {
    super();
    this.firstComponent = 'Create new functional';
  }


  onEdit(item) {
    this.task = item;
    this.task.status = false;
  }

  ngOnInit() {
  }
}
