import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { StarshipsListComponent }    from './starships-list/starships-list.component';

import { StarshipsRoutingModule } from './starships-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StarshipsRoutingModule
  ],
  declarations: [
    StarshipsListComponent
  ]
})
export class StarshipsModule {}
