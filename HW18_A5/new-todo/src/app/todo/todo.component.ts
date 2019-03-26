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

  addRespons(responsible: string) {
      this.responsibleService.addData(responsible);
  }

  ngOnInit(): void {
    this.responsibles = this.responsibleService.getData();
  }

}
