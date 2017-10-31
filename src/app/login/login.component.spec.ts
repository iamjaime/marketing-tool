import { LoginComponent } from './login.component';
import { TestBed, async } from '@angular/core/testing';
import { FacebookService,FacebookModule, UIParams, UIResponse } from 'ngx-facebook';
import {NgbModule,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";


import { Router } from '@angular/router';
import { AuthService  } from "angular4-social-login";

import { SocialUser } from "angular4-social-login";
import { Socket } from 'ng-socket-io';


describe('Login', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      providers:[
        NgbModule
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
