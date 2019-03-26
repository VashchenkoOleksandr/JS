import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem, TodoAPI } from './todoItem';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getNewData(): Observable<TodoItem[]> {
    return this.http.get('http://localhost:4200/assets/task.json').pipe(map(data => {
      const taskList = data["taskList"];
      return taskList.filter(function(todo: any) {
        if (todo.status === 'new') {
          return {id: todo.id, title: todo.title, responsible: todo.responsible, dueDate: todo.dueDate, status: todo.status};
        }
      });
    }));
}

  getData(): Observable<TodoItem[]> {
    return this.http.get('http://localhost:4200/assets/task.json').pipe(map(data => {
      const taskList = data["taskList"];
      return taskList.map(function(todo: any) {
          return {id: todo.id, title: todo.title, responsible: todo.responsible, dueDate: todo.dueDate, status: todo.status};
      });
    }));
  }

  getInProcess(): Observable<TodoItem[]> {
    return this.http.get('http://localhost:4200/assets/task.json').pipe(map(data => {
      const taskList = data["taskList"];
      return taskList.filter(function (todo: any) {
        if (todo.status === 'in process') {
          return {id: todo.id, title: todo.title, responsible: todo.responsible, dueDate: todo.dueDate, status: todo.status};
        }
      });
    }));
  }
  
  getDone(): Observable<TodoItem[]> {
    return this.http.get('http://localhost:4200/assets/task.json').pipe(map(data => {
      const taskList = data["taskList"];
      return taskList.filter(function(todo: any) {
        if (todo.status === 'done') {
          return {id: todo.id, title: todo.title, responsible: todo.responsible, dueDate: todo.dueDate, status: todo.status};
        }
      });
    }));
  }

  // Try send data on the server
  // getApiData() {
  //   const params = new HttpParams().set();
  //   return this.http.get(TodoAPI, {params});
  // }

  let headers = new HttpHeaders();
  headers = headers.set('owner', 'Vashchenko');

getApiData() {
    return this.http.get('https://api.todo-list.kotoblog.pp.ua/tasks/', this.headers);
      return taskList.map(function(todo) {
        return {id: todo.id, title: todo.title, responsible: todo.responsible, dueDate: todo.dueDate, status: todo.status};
      });
    }));
  }
}
