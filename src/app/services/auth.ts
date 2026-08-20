import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // lets this service make HTTP requests

// the shape the server sends back from /api/auth - note there is no password
export interface User {
  username: string;
  birthdate: string;
  age: number;
  email: string;
  valid: boolean;
}

@Injectable({ providedIn: 'root' })   // marks this class as injectable app-wide, without registering it manually
export class Auth {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';
  private storageKey = 'currentUser';   

  // send a POST request to the Express /api/auth route with username + password as the JSON body
  login(username: string, password: string) {
    return this.http.post<User>(`${this.apiUrl}/api/auth`, { username, password });
  }

  // local storage can only hold strings, so the object is converted to one first
  saveUser(user: User) {
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  // returns the stored user, or null if nobody is logged in
  getUser(): User | null {
    const data = localStorage.getItem(this.storageKey);
    if (!data) return null;
    return JSON.parse(data);      // turn the stored string back into an object
  }

  clearUser() {
    localStorage.removeItem(this.storageKey);
  }
}
