import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem, TodoAPI } from './todoItem';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

  url = 'https://api.todo-list.kotoblog.pp.ua/';

  dataParams = {
    headers: new HttpHeaders({owner: 'Vashchenko'}),
    observe: 'response' as 'body',
    params: new HttpParams()
  };

  constructor(private http: HttpClient) { }

  getApiData(): Observable<TodoItem[]> {
    return this.http.get(this.url + 'task', this.dataParams).pipe(map(data => {
      const taskList = data["taskList"];
      return taskList.map(function (todo: any) {
        return {id: todo.id, title: todo.title, responsible: todo.responsible, dueDate: todo.dueDate, status: todo.status};
      });
    }));
  }

  // For JSON File
  getData(): Observable<TodoItem[]> {
    return this.http.get('http://localhost:4200/assets/task.json').pipe(map(data => {
      const taskList = data["taskList"];
      return taskList.map(function (todo: any) {
        return {id: todo.id, title: todo.title, responsible: todo.responsible, dueDate: todo.dueDate, status: todo.status};
      });
    }));
  }

  getNewData(): Observable<TodoItem[]> {
    return this.http.get('http://localhost:4200/assets/task.json').pipe(map(data => {
      const taskList = data["taskList"];
      return taskList.filter(function (todo: any) {
        if (todo.status === 'new') {
          return {id: todo.id, title: todo.title, responsible: todo.responsible, dueDate: todo.dueDate, status: todo.status};
        }
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
      return taskList.filter(function (todo: any) {
        if (todo.status === 'done') {
          return {id: todo.id, title: todo.title, responsible: todo.responsible, dueDate: todo.dueDate, status: todo.status};
        }
      });
    }));
  }

}
