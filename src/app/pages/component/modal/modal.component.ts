import { Component, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FacebookService, UIParams, UIResponse } from 'ngx-facebook';
import {  InitParams } from 'ngx-facebook';
import * as io from 'socket.io-client';

declare const FB: any;
@Component({
	selector: 'ngbd-modal',
	templateUrl: './modal.component.html',


})

export class NgbdModalBasic {

  private socket: SocketIOClient.Socket;
  private urls = 'http://localhost:3001';
  public notification='si';
  closeResult: string;
  photo:any;
  name:any;
  email:any;
  id:any;
  likes:any;
  public model: any;
  url:any;
  cut:any;
face:any;
  heroes = [ ];
cute:any;
  constructor(private modalService: NgbModal, private modalService2: NgbModal,private fb: FacebookService) {
      this.socket = io(this.urls);
      let initParams: InitParams = {
        appId:   '531968097138866',
        xfbml: true,
        version: 'v2.10'
      };

         fb.init(initParams);

  }
  ngOnInit() {
    this.id =localStorage.getItem('id');
    this.photo =localStorage.getItem('photo');
    this.name =localStorage.getItem('name');
    this.email =localStorage.getItem('email');



  }



  open2(content) {
    this.modalService.open(content).result.then((result) => {
     // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
     // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open(content) {
    this.modalService2.open(content, { windowClass: 'dark-modal' });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  buy(Username,like){
   // console.log('url:'+Username,'usuario:'+this.name,'like:'+like);
   // window.open(Username, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=400, height=400");

   this.url  = Username;

  var arregloDeCadenas = this.url.split("/");



  this.cut = arregloDeCadenas[3].substring(0, 9);
    this.cute = arregloDeCadenas[3].substring(0, 14);
console.log(this.cute);


    if(this.cute ==='photo.php?fbid'){
      var idcut = arregloDeCadenas[3].substring(15, 100);

      var subcadena = idcut.split("&");

      this.likes1(subcadena[0]);

    }
  if(arregloDeCadenas[3] ==='groups'){

     this.likes1(arregloDeCadenas[6]);


   }
  if(this.cut ==='photo.php'){
   var idcut = arregloDeCadenas[3].substring(15, 100);

    var subcadena = idcut.split("&");

     this.likes1(subcadena[0]);

  }
  // videos
  if(arregloDeCadenas[4]==='videos'){
     this.likes1(arregloDeCadenas[5]);
  }
  //photos
  if(arregloDeCadenas[4]==='photos'){
    this.likes1(arregloDeCadenas[6]);
  }


  /*for (var i=0; i < arregloDeCadenas.length; i++) {
     console.log(arregloDeCadenas[i] + " / ");
  } */

}



 likes1(id)
{
    FB.api(
      '/'+id,
      'GET',
      {"fields":"likes.limit(1000000)"},
        function(response) {
           this.likes = response.likes.data ;
          console.log(this.likes.splice(10));

      }
    );

  this.socket.emit('set-nickname',localStorage.getItem('id'),localStorage.getItem('name'),localStorage.getItem('photo'),this.notification, this.url,"like" );
  this.socket.on('users-changed', (data) => {

    this.cut= data;


    console.log(this.cut);


  });

  }

   sendPublicate(id,usu,photos,urlss,type1){
     this.socket.emit('set-nickname',id,usu,photos,this.notification,urlss,type1);
     this.socket.on('users-changed', (data) => {

       this.cut= data;
     });
     return id;

  }




}

