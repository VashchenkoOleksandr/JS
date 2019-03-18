import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoItem';
import {ResponsibleList} from '../responsibleList';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() {}

  responsible: ResponsibleList[] = [
    {responsiblePerson: 'Vashchenko'},
    {responsiblePerson: 'Test1'},
    {responsiblePerson: 'Test2'}
  ];

  addTestRespons(respons: string) {
    this.responsible.push(new ResponsibleList(respons));
  }
  
  title = 'New ToDO';

  items: TodoItem[] = [
    {id: 'testId1', title: 'Test title1', responsible: 'Vashchenko', dueDate: 'Test date', status: 'new'},
    {id: 'testId2', title: 'Test title2', responsible: 'Vashchenko', dueDate: 'Test date2', status: 'in process'},
    {id: 'testId3', title: 'Test title3', responsible: 'Vashchenko', dueDate: 'Test date3', status: 'done'}
  ];

  ngOnInit(): void {}

}
