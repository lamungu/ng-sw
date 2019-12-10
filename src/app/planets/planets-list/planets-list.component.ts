import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlanetsService }  from '../planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets-list.component.html'
})
export class PlanetsListComponent implements OnInit {
  planetsList: any;

  constructor(
	private planetsService: PlanetsService
  ) {}

  ngOnInit() {
    this.getAll();
  }
  
  getAll() {
    this.planetsService.getPlanets().subscribe(
      data => {
        if (data.length > 0) {
          this.planetsList = data;
        }
      },
      error => {
        alert("No Data to Display");
      }
    );
  }
}