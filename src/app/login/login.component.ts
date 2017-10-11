import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http ,Headers,RequestOptions} from '@angular/http';
  

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
    public baseApiUrl: 'http://127.0.0.1:8000/api/v1/users';
    public baseApiPrefix : 'api';
    public baseApiVersion: 'v1';
    public baseApiClientId : 1;
    public baseApiClientSecret: 'Lt2TlSj17byjEUtKQLLqfoz2QTe2XA0trg6VV1vo';
    public baseApiGrantType : 'password';
    constructor(public http: Http,public router: Router) {}

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
        if(Username==='a' && password ==='b'){
            localStorage.setItem('isLoggedin', 'true');
        }
         
       console.log(localStorage);
       console.log(Username);
       console.log(password);  
      /* let url = 'http://127.0.0.1:8000/oauth/token';
       let postData = {
         client_id : 1,
         client_secret :'Lt2TlSj17byjEUtKQLLqfoz2QTe2XA0trg6VV1vo',
         grant_type : 'password',
         username : 'bart@simpson.com',
         password :'Test123!'
       };
   
        this.http.post(url, postData)
       .subscribe(response     => {
        console.log(response);}
    );*/
    }
    

}
