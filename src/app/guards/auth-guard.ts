import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  const user = auth.getUser();      // null if local storage is empty

  if (user && user.valid) {
    return true;                    // logged in - let the route load
  }

  router.navigate(['/login']);      // not logged in - send them to authenticate
  return false;                     // and block the route
};

