import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetsListComponent }    from './planets-list/planets-list.component';

const planetsRoutes: Routes = [
  { path: 'planets-list',  component: PlanetsListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(planetsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlanetsRoutingModule { }
