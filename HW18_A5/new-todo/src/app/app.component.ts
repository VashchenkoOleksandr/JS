import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';

class Plan {
  id: number;
  info: string;
  status: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'My New ToDO';
  myPlans = 'My plans:';
  plans: Plan[] = [
    {id: 1, info: 'Create new ToDO', status: false},
    {id: 2, info: 'Add to the application with services', status: false},
    {id: 3, info: 'Add to the application with router page', status: false},
    {id: 4, info: 'Add to the application with pipes', status: false},
    {id: 5, info: 'Create an application module to work with the server', status: false},
    {id: 6, info: 'Optional. Save the ToDo plans in Local Storage', status: false}
  ];

  user: User;

  private url: string;
  
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:4200/assets/user.json';
  }

  ngOnInit() {
    this.http.get(this.url).subscribe((data: User) => this.user = data);
  }
}
