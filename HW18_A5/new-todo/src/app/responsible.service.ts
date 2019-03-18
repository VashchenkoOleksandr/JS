import { Responsibles } from './responsibleList';


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
    if (responsible !== undefined) {
      this.respons.push(new Responsibles(responsible));
    }
  }

}
