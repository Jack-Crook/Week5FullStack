import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  error = '';
  private users = [
    { email: 'Jack', password: 'password123' },
    { email: 'Lachlan', password: 'admin123' },
  ];

  constructor(private router: Router) {}

  onSubmit() {
    const match = this.users.find(
      (u) => u.email === this.email && u.password === this.password
    );

    if (match) {
      this.error = '';
      this.router.navigate(['/profile']);
    } else {
      this.error = 'Invalid email or password';
    }
  }
}


