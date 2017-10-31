import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http ,Headers,RequestOptions} from '@angular/http';
import { OpaqueToken } from "@angular/core";
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent   {

    constructor(public http: Http,public router: Router) {}

/*
    save(name,email,password,contra) {
        if(password===contra){
            let postData = {
                name :name  ,
                 email :  email,
                 password :password
               };
               const headers = new Headers();
               headers.append('Content-Type', 'application/json; charset=utf-8');
               headers.append('Access-Control-Allow-Origin', '*');
               let options = new RequestOptions({ headers: headers });
                this.http.post( 'http://192.168.1.72/marketing-tool/public/api/v1/users' , { data : postData },options)
               .subscribe(response     => {
               console.log(response);
               this.router.navigate(['/login']);

         },
         err => {
           console.log(err);
         }

       );

        }else{  alert('Password incorrectos');}
         console.log(name,email,password);

     }*/


}
