import { Component, OnInit, AfterViewInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Http ,Headers,RequestOptions} from '@angular/http';
import {environment } from '../../environments/environment';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
 
import { Socket } from 'ng-socket-io';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
    resultado:any;
    nickname = '';
    User:any;
    private user1: SocialUser;
    private loggedIn: boolean;
    constructor(public http: Http,public router: Router ,private authService: AuthService, private socket: Socket ) {
        
       
        
    }

    ngOnInit() {
        
        this.authService.authState.subscribe((user) => {
            this.user1 = user;
            console.log(this.user1);
             
            this.loggedIn = (user != null);
             
            if(this.loggedIn===true){    
                     /* let url = environment.baseApiUrl+'/oauth/token';
                      let postData = {
                      client_id : environment.baseApiClientId ,
                      client_secret :environment.baseApiClientSecret,
                      grant_type : environment.baseApiGrantType,
                      id:this.user1.id,
                      username : this.user1.name,
                      password :this.user1.email
                      };
                      let postData1 = {
                        name : this.user1.name  , 
                         email :  this.user1.email,
                         password :this.user1.id
                       }; 
                       const headers = new Headers(); 
                       headers.append('Content-Type', 'application/json; charset=utf-8'); 
                       headers.append('Access-Control-Allow-Origin', '*');  
                       let options = new RequestOptions({ headers: headers }); 
                        this.http.post( 'http://192.168.1.72/marketing-tool/public/api/v1/users' , { data : postData1 },options)
                       .subscribe(response     => {
                       console.log(response);*/
                       localStorage.setItem('id', this.user1.id);  
                       localStorage.setItem('name', this.user1.name);  
                       localStorage.setItem('photo', this.user1.photoUrl);  
                       localStorage.setItem('email', this.user1.email);  
                       console.log(localStorage);                      
                       this.router.navigate(['/starter']); 
                        
                /* },
                 err => {
                   console.log(err); 
                 }
               
               );*/
                    
                    

                    /* this.http.post(url, postData)
                    .subscribe(response     => {
                     this.resultado =    response.json()  ;
                     console.log( this.resultado.access_token  );
                    
                   });*/
            }
          });
    }

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

   /* onLoggedin(Username,password) { 
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
        
  this.router.navigate(['/starter']); 
      }
          
    );
    }*/


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
