import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';          
  password = '';
  error = '';             // matches the @if already in login.html

  constructor(private router: Router, private auth: Auth) {}

  onSubmit() {
    this.auth.login(this.username, this.password).subscribe({
      next: (response) => {
        if (???) {                   
          this.error = '';
          // ??? save the user
          // ??? go to the profile page
        } else {
          this.error = 'Invalid username or password';
        }
      },
      error: (err: HttpErrorResponse) => {
        this.error = 'Could not reach the server.';
      },
    });
  }
}
