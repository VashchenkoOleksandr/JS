import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  constructor() { }
  firstComponent = 'Create the task';

  task: string;
  tasks = [];

  task = {
    text: '',
    id: 0
  };

  onClick() {
    if (this.task.id === 0) {
    this.tasks.push({
      text: this.task.text,
      status: false,
      id: new Date().getTime()
    });
    }

    this.task = {
      text: '',
      id: 0
    };
  }

  onEdit(item) {
    this.task = item;
  }
  ngOnInit() {
  }
}
