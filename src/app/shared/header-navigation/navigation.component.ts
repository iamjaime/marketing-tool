import { Component, AfterViewInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";

@Component({
  selector: 'ap-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {

  name:any;
  showHide:boolean;
  photo:any;
  email:any;


  constructor(private router: Router,private authService: AuthService) {
    this.showHide = true;
  }

  ngOnInit() {
    if(sessionStorage.getItem('id')){
      this.photo = sessionStorage.getItem('photo');
      this.name = sessionStorage.getItem('name');
      this.email = sessionStorage.getItem('email');
      console.log(this.photo );
    }
  }


  changeShowStatus(){
    this.showHide = !this.showHide;
  }


  /**
   * Handles signing out of system.
   */
  signOut(): void {
        this.authService.signOut().then(
          (res) => {
            //If the promise returned success....
            this.router.navigate(['/login']);
          },
          (err) => {
            console.log(err);
          }
        );
    }


    ngAfterViewInit() {

        $(function () {
            $(".preloader").fadeOut();
        });

        var set = function () {
            var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            var topOffset = 0;
            if (width < 1170) {
                $("body").addClass("mini-sidebar");
                $('.navbar-brand span').hide();
                $(".sidebartoggler i").addClass("ti-menu");
            } else {
                $("body").removeClass("mini-sidebar");
                $('.navbar-brand span').show();
            }

            var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            if (height < 1) height = 1;
            if (height > topOffset) {
                $(".page-wrapper").css("min-height", (height) + "px");
            }

        };
        $(window).ready(set);
        $(window).on("resize", set);

        $(document).on('click', '.mega-dropdown', function (e) {
            e.stopPropagation();
        });

        $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
            $(".app-search").toggle(200);
        });

        (<any>$('.scroll-sidebar, .right-sidebar, .message-center')).perfectScrollbar();

        $("body").trigger("resize");
    }
}
