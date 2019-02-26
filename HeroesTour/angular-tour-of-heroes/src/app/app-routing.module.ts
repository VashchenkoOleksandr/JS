import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';




const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
// What is that? It is the Router initialisation
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
