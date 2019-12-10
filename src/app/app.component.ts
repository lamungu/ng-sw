import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /*getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }*/
}

/*export class AppComponent implements OnInit {
  //characters: Characters[];
  error = '';
  success = '';
        
  constructor(private charactersService: CharactersService) {
  }
        
  ngOnInit() {
    this.getCharacters();
  }
        
  getCharacters(): void {
	this.charactersService.getAll().subscribe(
		(res: Characters[]) => {
			this.characters = res;
		},
		(err) => {
			this.error = err;
		}
	);
  }
}*/