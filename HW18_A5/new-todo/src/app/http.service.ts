import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from './todoItem';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(): Observable<TodoItem[]> {
    return this.http.get('http://localhost:4200/assets/task.json').pipe(map(data => {
      const taskList = data["taskList"];
      return taskList.map(function(todo: any) {
        return {id: todo.id, title: todo.title, responsible: todo.responsible, dueDate: todo.dueDate, status: todo.status};
      });
    }));
  }

}
