import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PlanetsListComponent }    from './planets-list/planets-list.component';

import { PlanetsRoutingModule } from './planets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlanetsRoutingModule
  ],
  declarations: [
    PlanetsListComponent
  ]
})
export class PlanetsModule {}
