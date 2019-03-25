import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from './todoItem';
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

}
