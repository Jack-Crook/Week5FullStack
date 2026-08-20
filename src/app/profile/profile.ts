import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, User } from '../services/auth';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],          // needed for [(ngModel)] in the template
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  user: User | null = null;
  saved = '';                      // confirmation message after a save

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit() {
    this.user = this.auth.getUser();      // load the logged-in user from storage
  }

  onSave() {
    if (!this.user) return;
    this.auth.saveUser(this.user);        // write the edited details back to storage
    this.saved = 'Profile updated.';
  }
}
