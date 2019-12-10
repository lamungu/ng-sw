import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { CharactersListComponent }    from './characters-list/characters-list.component';
import { CharactersRoutingModule } from './characters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CharactersRoutingModule
  ],
  declarations: [
    CharactersListComponent
  ]
})
export class CharactersModule {}
