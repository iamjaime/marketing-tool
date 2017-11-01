import { Component, Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {   ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FacebookService, UIParams, UIResponse } from 'ngx-facebook';
import {  InitParams } from 'ngx-facebook';
import * as io from 'socket.io-client';
declare const FB: any;



@Injectable()
export class WikipediaService {


}

@Component({
	selector: 'ngbd-pagination',
	templateUrl: './posts.component.html',
	providers: [WikipediaService]
})

export class Post{
  private socket: SocketIOClient.Socket;
  private urls = 'http://localhost:3001';
  photo:any;
  name:any;
  email:any;
  id:any;
  likes:any;
  url:any;
  cut:any;
  cute:any;

  constructor(private modalService: NgbModal, private modalService2: NgbModal,private fb: FacebookService) {
    this.socket = io(this.urls);
  }

  /**
   * Handles get session data process
   */
  private ngOnInit(){
    this.getDataSession();
  }

  /**
   * Handles Authentication
   */
  private getDataSession() {
    this.id = sessionStorage.getItem('id');
    this.photo = sessionStorage.getItem('photo');
    this.name = sessionStorage.getItem('name');
    this.email = sessionStorage.getItem('email');
  }

  /**
   * Handles show form
   */
  private send(content) {
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**
   * Handles Validate facebook url
   */
  buy(urlface,posd){
    this.url  = urlface;
    var fragment = this.url.split("/");
    this.cut = fragment[3].substring(0, 9);
    this.cute = fragment[3].substring(0, 14);

    if(this.cute === 'photo.php?fbid')
    {
      var idcut = fragment[3].substring(15, 100);
      var subcadena = idcut.split("&");
      this.getPost(subcadena[0]);
    }

    if(fragment[3] === 'groups')
    {
      this.getPost(fragment[6]);
    }

    if(this.cut === 'photo.php')
    {
      var idcut = fragment[3].substring(15, 100);
      var subcadena = idcut.split("&");
      this.getPost(subcadena[0]);
      return urlface;
    }

    if(fragment[4] === 'videos')
    {
      this.getPost(fragment[5]);
      return urlface;
    }

    if(fragment[4] === 'photos')
    {
      this.getPost(fragment[6]);
      return urlface;
    }
  }

  /**
   * Handles facebook credentials
   */
  private facebookSocket(){
    let initParams: InitParams = {
      appId:   '531968097138866',
      xfbml: true,
      version: 'v2.10'
    };

    this.fb.init(initParams);
  }

  /**
   * Handles get Posts facebook
   */
   getPost(idfacebook)
  {
    this.facebookSocket();
    var FBfunction = function()
    {
      FB.api(
        '/'+idfacebook,
        'GET',
        {"fields":"sharedposts{from,name,description,full_picture,is_published,permalink_url,created_time},format"},
        function(response) {
          this.likes = response ;
          console.log(this.likes);
            // Insert your code here
        }
      );
    }
    this.socket.emit('set-nickname',sessionStorage.getItem('id'),sessionStorage.getItem('name'),sessionStorage.getItem('photo'),'si', this.url,"Post" );
    this.socket.on('users-changed', (data) => {  this.cut= data;  console.log(this.cut);  });
  }

  /**
   * Handles send notification to connected clients
   */
  sendPublicate(id,usu,photos,urlss,type1){
    this.socket.emit('set-nickname',id,usu,photos,'si',urlss,type1);
    this.socket.on('users-changed', (data) => {
      this.cut= data;
    });
    return id;
  } 
}
