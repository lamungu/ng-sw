import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarshipsService }  from '../starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships-list.component.html'
})
export class StarshipsListComponent implements OnInit {
  starshipsList: any;

  constructor(
	private starshipsService: StarshipsService
  ) {}

  ngOnInit() {
    this.getAll();
  }
  
  getAll() {
    this.starshipsService.getStarships().subscribe(
      data => {
        if (data.length > 0) {
          this.starshipsList = data;
        }
      },
      error => {
        alert("No Data to Display");
      }
    );
  }
}