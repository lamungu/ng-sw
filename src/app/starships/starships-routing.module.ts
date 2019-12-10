import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarshipsListComponent }    from './starships-list/starships-list.component';

const starshipsRoutes: Routes = [
  { path: 'starships-list',  component: StarshipsListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(starshipsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StarshipsRoutingModule { }
