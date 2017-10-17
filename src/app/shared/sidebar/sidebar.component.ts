import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { Router } from '@angular/router';
import { SocialUser } from "angular4-social-login";
@Component({
  selector: 'ap-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements AfterViewInit {
     user: any;
    private user1: SocialUser;
    private loggedIn: boolean;
   photo:any;
   name:any;
   email:any;
    constructor(private authService: AuthService,private router: Router) { }

    ngOnInit() {
      this.photo =localStorage.getItem('photo');
      this.name =localStorage.getItem('name');
      this.email =localStorage.getItem('email');
        
            console.log(this.photo ); 
      }

    ngAfterViewInit() {
        $(function () {
            var url = window.location.toString();
            var element = $('ul#sidebarnav a').filter(function () {
                let a = <HTMLAnchorElement>this;
                return (a.href == url ? true : false);
            }).addClass('active').parent().addClass('active');
            while (true) {
                if (element.is('li')) {
                    element = element.parent().addClass('in').parent().addClass('active');
                }
                else {
                    break;
                }
            }

            (<any>$('#sidebarnav')).metisMenu();
        });
    }
    onLoggedout()  {
     
        this.authService.signOut();
        localStorage.removeItem('id');
        localStorage.clear();
        console.log(this.authService);
        this.router.navigate(['/login']);
   }
}
