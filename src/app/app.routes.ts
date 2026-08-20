import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

import { Home } from './home/home';
import { Login } from './login/login';
import { Profile } from './profile/profile';



export const routes: Routes = [
    {path: "Home", component: Home, title: "Home"},
    {path:'login', component: Login},
    {path: "profile", component: Profile, canActivate: [authGuard]}
];

