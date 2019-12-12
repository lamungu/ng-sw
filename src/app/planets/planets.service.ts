import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
	constructor(private http: HttpClient) { }
	
	baseUrl = 'http://localhost:8080/planets/';
	
	getPlanets() {
		return this.http.get<any>(this.baseUrl);
	}
}