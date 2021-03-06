import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
	constructor(private http: HttpClient) { }
	
	baseUrl = 'http://localhost:8080/characters/';
	
	getCharacters(searchString) {
		return this.http.get<any>(this.baseUrl + searchString);
	}
}