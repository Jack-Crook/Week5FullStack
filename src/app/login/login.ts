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
        // a wrong password still arrives here as a 200, so check the flag
        if (response.valid) {
          this.error = '';
          this.auth.saveUser(response);              // store the logged-in user (no password in it)
          this.router.navigate(['/profile']);
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
