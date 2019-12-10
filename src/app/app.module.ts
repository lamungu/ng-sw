import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import { Router } from '@angular/router';

import { AppComponent }            from './app.component';

import { AppRoutingModule }        from './app-routing.module';
import { CharactersModule }            from './characters/characters.module';
import { PlanetsModule }            from './planets/planets.module';
import { StarshipsModule }            from './starships/starships.module';

@NgModule({
  imports: [
    BrowserModule,
    CharactersModule,
    PlanetsModule,
    StarshipsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/