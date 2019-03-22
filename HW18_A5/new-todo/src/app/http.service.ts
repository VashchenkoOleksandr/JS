import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  private taskURL = 'http://localhost:4200/assets/task.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.taskURL);
  }
}
