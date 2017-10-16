import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private authService: AuthService) { }
    user: SocialUser;
    canActivate() {
        if (localStorage.getItem('token')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
