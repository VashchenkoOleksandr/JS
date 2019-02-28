import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {
  firstComponent = 'Create the task';

  task: string;
  tasks = [];

  onClick() {
    this.tasks.push({
      text: this.task,
      strike: false
    });

    this.task = '';
  }

  constructor() { }

  ngOnInit() {
  }
}
