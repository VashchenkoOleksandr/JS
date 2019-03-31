import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpService } from '../http.service';
import { TodoItem, Task } from '../todoItem';

@Component({
  selector: 'app-api-todo',
  templateUrl: './api-todo.component.html',
  providers: [HttpService],
  styleUrls: ['./api-todo.component.scss']
})
export class ApiTodoComponent implements OnInit {

  todoItem: TodoItem[] = [];
  todoItems: TodoItem[] = [];
  tasks: Task[] = [];

  params: string;
  taskStatus: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {

    this.httpService.getApiData().subscribe((response: HttpResponse<Array<Task>>) => {
      this.tasks = response.body;
    });
  }

  addTask() {
    const task: Task = {
      title: this.params,
      responsible: 'Vashchenko',
      dueDate: new Date(),
      status: this.taskStatus.toString()
    };

    this.params = null;

    this.httpService.postData(task).subscribe((response: HttpResponse<Task>) => {
      if (response.status === 201) {
        task.id = response.body.id;
        this.tasks.push(task);
      }
    });
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
