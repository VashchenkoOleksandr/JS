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

  onStatus(item) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (item.id === this.tasks[i].id) {
        (this.tasks[i].status) ? this.tasks[i].status = false : this.tasks[i].status = true;
        break;
      }
    }
  }

  onEdit(item) {
    this.task = item;
  }

  onDelete(item) {
  }


  ngOnInit() {
  }
}
