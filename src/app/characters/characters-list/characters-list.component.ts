import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharactersService }  from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters-list.component.html'
})
export class CharactersListComponent implements OnInit {
  charactersList: any;
  searchString: string = '';
  
  onEnter(value: string) {
	  this.getAll();
  }

  constructor(
	private charactersService: CharactersService
  ) {}

  ngOnInit() {
    this.getAll();
  }
  
  getAll() {
    this.charactersService.getCharacters(this.searchString).subscribe(
      data => {
        if (data.length > 0) {
          this.charactersList = data;
        }
		else {
			this.charactersList = [{'name': 'Could not find any characters under the name of: ' + this.searchString}];
		}
      },
      error => {
        alert("No Data to Display");
      }
    );
  }
}