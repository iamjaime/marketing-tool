import { Component, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FacebookService, UIParams, UIResponse } from 'ngx-facebook';
import {  InitParams } from 'ngx-facebook';
import * as io from 'socket.io-client';

declare const FB: any;
@Component({
	selector: 'ngbd-modal',
	templateUrl: './modal.component.html',
	encapsulation: ViewEncapsulation.None,
	styles: [`
    .dark-modal .modal-content {
      background-color: #009efb;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]
})

export class NgbdModalBasic {
  private socket: SocketIOClient.Socket;
  private urls = 'http://localhost:3001';
  closeResult: string;
  photo:any;
  name:any;
  email:any;
  id:any;
  likes:any;
  public model: any;
  idcut:any;
  url:any;
  cut:any;
  enlace:any;
  public notification='si';
  heroes = [ ];
  ngOnInit() {
    this.id =localStorage.getItem('id');
    this.photo =localStorage.getItem('photo');
    this.name =localStorage.getItem('name');
    this.email =localStorage.getItem('email');



    }
  constructor(private modalService: NgbModal, private modalService2: NgbModal,private fb: FacebookService) {
    this.socket = io(this.urls);
    let initParams: InitParams = {
      appId:  this.id,
      xfbml: true,
      version: 'v2.10'
    };

    fb.init(initParams);



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

  console.log("<br>El arreglo tiene " + arregloDeCadenas.length + " elementos: ");
  console.log(arregloDeCadenas[4]);
  this.cut = arregloDeCadenas[3].substring(0, 9);


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

  this.socket.emit('set-nickname',localStorage.getItem('id'),localStorage.getItem('name'),localStorage.getItem('photo'),this.notification);
  this.socket.on('users-changed', (data) => {

    this.cut= data;


    console.log(this.cut);


  });
  }


}



