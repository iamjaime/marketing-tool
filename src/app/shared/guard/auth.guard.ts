import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from "angular4-social-login";
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private authService: AuthService) { }

    canActivate() {
        console.log(this.authService);
        if (this.authService != null) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
