import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoItem';
import { Responsibles } from '../responsibleList';
import { ResponsibleService } from '../responsible.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [ResponsibleService]
})
export class TodoComponent implements OnInit {

  constructor(private responsibleService: ResponsibleService) {}

  responsibles: Responsibles[] = [];

  title = 'New ToDO';

  dueDate = new Date();

  items: TodoItem[] = [
    {id: 'testId1', title: 'Test title1', responsible: 'Vashchenko', dueDate: 'Test date', status: 'new'},
    {id: 'testId2', title: 'Test title2', responsible: 'Vashchenko', dueDate: 'Test date2', status: 'in process'},
    {id: 'testId3', title: 'Test title3', responsible: 'Vashchenko', dueDate: 'Test date3', status: 'done'}
  ];

  addRespons(responsible: string) {
      this.responsibleService.addData(responsible);
  }
  
  addTodo() {
    if (this.TodoItem.title !== undefined) {
      this.items.push(TodoItem[{TodoItem}]);
    }
  }

  ngOnInit(): void {
    this.responsibles = this.responsibleService.getData();
  }

}
