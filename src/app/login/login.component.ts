import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { Socket } from 'ng-socket-io';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',

    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

    user: SocialUser;

    constructor( public router: Router, private authService: AuthService) {


    }

   /**
    * Handles authentication process
    */
    ngOnInit() {
     this.authenticate();
    }

  /**
   * Handles Authentication
   * @returns {Subscription}
   */
  private authenticate() {
     return this.authService.authState.subscribe(
       (user) => {
        this.user = user;
        if(this.user){
          console.log(this.user);
          sessionStorage.setItem('id', this.user.id);
          sessionStorage.setItem('name', this.user.name);
          sessionStorage.setItem('photo', this.user.photoUrl);
          sessionStorage.setItem('email', this.user.email);
          this.redirectToDashboard();
        }
      });
    }


    /**
     * Handles Redirecting the user after authentication
     * @returns {Promise<boolean>}
     */
    private redirectToDashboard() {
      return this.router.navigate(['/starter']);
    }

    /**
     * Handles signing in with Google Service Provider
     */
    signInWithGoogle() {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    /**
     * Handles signing in with Facebook Service Provider
     */
    signInWithFB(){
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

}




