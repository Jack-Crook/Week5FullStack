import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // lets this service make HTTP requests


@Injectable({ providedIn: 'root' })
export class Auth {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  login (username: string, password: string) {       // send a POST request to the Express /register route with email + password as the JSON body
  return this.http.post(`${this.apiUrl}/api/auth`, { username, password });
}
 
}
