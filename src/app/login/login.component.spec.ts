import { LoginComponent } from './login.component';
import { TestBed, async } from '@angular/core/testing';
import { FacebookService,FacebookModule, UIParams, UIResponse } from 'ngx-facebook';
import {NgbModule,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';

import {    AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

import { AuthService    } from "angular4-social-login";



let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("800498130979-fh62bvfalk7f38coe0q4iucsasf0elk1.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("531968097138866")
  }
]);

export function provideConfig() {
  return config;
}


describe('Login', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      providers:[
        NgbModule,AuthService,{
          provide: AuthServiceConfig,
          useFactory: provideConfig
        }

      ],
      imports: [  RouterTestingModule,NgbModule.forRoot (),FacebookModule.forRoot()],
      declarations: [
        LoginComponent
      ]
    }).compileComponents();
  }));

  ////// for id
  //  unit test of I like videos
  it('Google',  () => {

    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.signInWithGoogle).toBeDefined();
  });
  it('Facebook',  () => {

    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.signInWithFB).toBeDefined();
  });

});
