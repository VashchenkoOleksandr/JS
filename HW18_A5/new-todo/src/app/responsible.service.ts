import { Injectable } from '@angular/core';
import { Responsibles } from './responsibleList';

@Injectable({
  providedIn: 'root'
})
export class ResponsibleService {

  private respons: Responsibles[] = [
    { responsible: 'Vashchenko'},
    { responsible: 'Test1'},
    { responsible: 'Test2'}
  ];

  getData(): Responsibles[] {
    return this.respons;
  }

  addData(responsible: string) {
    this.respons.push(new Responsibles(responsible));
  }

  constructor() { }
}
