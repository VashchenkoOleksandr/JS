import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoItem';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title = 'New ToDO';

  items: TodoItem[] = [
    {id: 'testId1', title: 'Test title1', responsible: 'Me', dueDate: 'Test date', status: 'new'},
    {id: 'testId2', title: 'Test title2', responsible: 'Me', dueDate: 'Test date2', status: 'in process'},
    {id: 'testId3', title: 'Test title3', responsible: 'Me', dueDate: 'Test date3', status: 'done'}
  ];

  constructor() {}

  ngOnInit(): void {}

}
