import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacebookService } from 'ngx-facebook';
import { InitParams } from 'ngx-facebook';
import * as io from 'socket.io-client';
declare const FB: any;

@Component({
  selector: 'ngbd-modal',
  templateUrl: './likes.component.html',
})

export class Likes {

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
  buy(urlface,likesd){
    this.url  = urlface;
    var fragment = this.url.split("/");
    this.cut = fragment[3].substring(0, 9);
    this.cute = fragment[3].substring(0, 14);

    if(this.cute === 'photo.php?fbid')
    {
      var idcut = fragment[3].substring(15, 100);
      var subcadena = idcut.split("&");
      this.getLikes(subcadena[0]);
    }

    if(fragment[3] === 'groups')
    {
      this.getLikes(fragment[6]);
    }

    if(this.cut === 'photo.php')
    {
      var idcut = fragment[3].substring(15, 100);
      var subcadena = idcut.split("&");
      this.getLikes(subcadena[0]);
      return urlface;
    }

    if(fragment[4] === 'videos')
    {
      this.getLikes(fragment[5]);
      return urlface;
    }

    if(fragment[4] === 'photos')
    {
      this.getLikes(fragment[6]);
      return urlface;
    }
  }

  /**
   * Handles facebook credentials
   */
  private facebookSocket(){
    let initParams: InitParams = {
      appId:   this.id,
      xfbml: true,
      version: 'v2.10'
    };

    this.fb.init(initParams);
  }

  /**
   * Handles get likes facebook
   */
  private getLikes(idfacebook)
  {
    this.facebookSocket();
    var FBfunction = function()
    {
      FB.api( '/' + idfacebook, 'GET', {"fields": "likes.limit(1000000)"},
        function (response)
        {
          this.likes = response.likes.data;
          console.log(this.likes.splice(10));
        }
      );
    }
    this.socket.emit('set-nickname',sessionStorage.getItem('id'),sessionStorage.getItem('name'),sessionStorage.getItem('photo'),'si', this.url,"like" );
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
