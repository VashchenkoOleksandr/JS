import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  constructor() { }
  firstComponent = 'Old functional';

  task: string;
  tasks = [];

  task = {
    text: null,
    id: 0,
  };

  onClick() {
    if (this.task.id === 0 && this.task.text != null) {
      this.tasks.push({
        text: this.task.text,
        status: false,
        id: new Date().getTime()
      });
    }

    this.task = {
      text: null,
      id: 0,
    };
  }

  onEdit(item) {
    this.task = item;
  }

  onStatus(item) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (item.id === this.tasks[i].id) {
        (this.tasks[i].status) ? this.tasks[i].status = false : this.tasks[i].status = true;
        break;
      }
    }
  }

  onDelete(item) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (item.id === this.tasks[i].id) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }

  ngOnInit() {
  }
}
