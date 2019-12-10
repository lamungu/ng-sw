import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
	constructor(private http: HttpClient) { }
	
	baseUrl = 'http://localhost:8080/starships/';
	
	getStarships() {
		return this.http.get(this.baseUrl);
	}
}