import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, User } from '../services/auth';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],          // currently empty — [(ngModel)] won't compile without this
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  user: User | null = null;
  saved = '';                      // confirmation message after a save

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit() {
    // load the logged-in user from storage into this.user
    // this.user = ???
  }

  onSave() {
    if (!this.user) return;
    // ??? write the edited user back to storage
    this.saved = 'Profile updated.';
  }
}
