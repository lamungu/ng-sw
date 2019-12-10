import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersListComponent }    from './characters-list/characters-list.component';

const charactersRoutes: Routes = [
  { path: 'characters-list',  component: CharactersListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(charactersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CharactersRoutingModule { }
