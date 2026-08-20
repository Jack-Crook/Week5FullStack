import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('week4');

  constructor(private auth: Auth, private router: Router) {}

  logout() {
    this.auth.clearUser();              // empty local storage = nobody logged in
    this.router.navigate(['/login']);
  }
}

