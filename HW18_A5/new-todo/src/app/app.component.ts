import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My New ToDO';
  myPlans = 'My plans:';
  plans: plan[] = [
    {info: 'Create new ToDO', status: false},
    {info: 'Add to the application with services', status: false},
    {info: 'Add to the application with router page', status: false},
    {info: 'Add to the application with pipes', status: false},
    {info: 'create an application module to work with the server', status: false},
    {info: 'Optional. Save the ToDo plans in Local Storage', status: false}
  ];
}
