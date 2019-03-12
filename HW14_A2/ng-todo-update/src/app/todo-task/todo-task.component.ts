import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  constructor() { }
  firstComponent = 'Old functional';

  tasks = [];

  task = {
    text: null,
    id: 0,
    status: false,
  };

  onClick() {
    if (this.task.id === 0 && this.task.text != null) {
      this.tasks.push({
        text: localStorage.getItem(locStorage(createUUID(), this.task.text)),
        status: false,
        id: new Date().getTime()
      });
    }

    function createUUID() {
      const s = [];
      const hexDigits = '0123456789';
      for (let i = 0; i < 9; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x9), 1);
      }
      s[0] = 'id: ';
      s[3] = s[6] = '-';

      return s.join('');
    }
    function locStorage(key, data) {
      localStorage.setItem(key, data);
      return key;
    }

    this.task = {
      text: null,
      id: 0,
      status: false,
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
