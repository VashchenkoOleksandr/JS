import { Component, OnInit } from '@angular/core';

class Status {
  condition: string;
}

@Component({
  selector: 'app-status',
  template: `
  <label>
    <select name="status">
      <option *ngFor="let Status of statuses" [ngClass]="{'new': Status.condition === 'new',
      'process': Status.condition === 'in process', 'done': Status.condition === 'done'}">{{Status.condition}}</option>
    </select>
  </label>`,
  styles: [`
    .new{color: blue;}
    .process{color: orange;}
    .done{color: green;}
  `]
})
export class StatusComponent implements OnInit {

  statuses: Status[] = [
    {condition: 'new'},
    {condition: 'in process'},
    {condition: 'done'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
