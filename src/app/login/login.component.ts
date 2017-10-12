import { Component, OnInit, AfterViewInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Http ,Headers,RequestOptions} from '@angular/http';
import {environment } from '../../environments/environment';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
 
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
    resultado:any;
    User:any;
    constructor(public http: Http,public router: Router ,private authService: AuthService ) {}

    ngOnInit() {}

    ngAfterViewInit() {
        $(function() {
            $(".preloader").fadeOut();
        });
        $(function() {
            (<any>$('[data-toggle="tooltip"]')).tooltip()
        });
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    }

    onLoggedin(Username,password) {
       
     
       let url = environment.baseApiUrl+'/oauth/token';
       let postData = {
         client_id : environment.baseApiClientId ,
         client_secret :environment.baseApiClientSecret,
         grant_type : environment.baseApiGrantType,
         username : Username,
         password :password
       };
   
        this.http.post(url, postData)
       .subscribe(response     => {
        this.resultado =    response.json()  ;
        //console.log( this.resultado.access_token  );
        localStorage.setItem('token', this.resultado.access_token);         
        console.log(localStorage);
        let headers = new Headers();
        let access_token = localStorage.getItem('token'); 
        console.log(access_token );
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json'); 
        headers.append('Authorization', 'Bearer ' + access_token);
      
        let options = new RequestOptions({ headers: headers });
        this.http.get( environment.baseApiUrl + '/ap1/v1/users', options).subscribe((res) =>{ this.User =res.json();
    console.log(this.User);
  //this.router.navigate(['/starter']);
}
    );
      }
        
    
  
        
    );
    }
    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      }
     
      signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      }
     
      signOut(): void {
        this.authService.signOut();
      }

}
