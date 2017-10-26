import {  OnInit  } from '@angular/core';
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
import swal from 'sweetalert2';

declare const FB: any;



@Injectable()
export class WikipediaService {


}

@Component({
  selector: 'ap-rightsidebar',
  templateUrl: './rightsidebar.component.html'
})
export class RightSidebarComponent {
	private socket: SocketIOClient.Socket; // The client instance of socket.io


  private urls = 'http://localhost:3001';

	 closeResult: string;
	 photo:any;
	 users:any;
	 name:any;
	 email:any;
	 id:any;
	 likes:any;
	 public model: any;
	 idcut:any;
	 url:any;
	 cut:any;
	 enlace:any;
	 public heroes = [];

	 constructor(private modalService: NgbModal, private modalService2: NgbModal,private fb: FacebookService) {
    this.socket = io(this.urls);


    let initParams: InitParams = {
      appId:  this.id,
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

    this.socket.emit('set-nickname',localStorage.getItem('id'),localStorage.getItem('name'),localStorage.getItem('photo'));
    this.socket.on('users-changed', (data) => {

			 this.cut= data;



if(this.cut.event==='connect'){
  this.heroes.push(data);
  console.log(this.heroes);
}
 if(this.cut.evets==='si'){
        if(localStorage.getItem('id') != this.cut.id) {

          swal({
            html:'<iframe src="https://www.facebook.com/plugins/post.php?href=' +
            this.cut.urls+ '&width=500&show_text=false& = &height=497' +
            '"  width="100%"height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>' +
            '<br>  <img src="' + this.cut.photo
            +
            '"  style="width: 30px; height: 30px; border-radius: 150px; -webkit-border-radius: 150px; -moz-border-radius: 150px;" /><b> ' +
            this.cut.user+'</b> <br>requested  1 '+this.cut.types
            +' for $ 1 dollar',

            confirmButtonText: 'Cancel',

            showLoaderOnConfirm: true,



          })


        }
}
	});

    this.socket.emit('set-post',localStorage.getItem('id'),localStorage.getItem('name'),localStorage.getItem('photo'));
    this.socket.on('users-post', (data) => {

      this.cut= data;

      if(this.cut.evets==='si'){
        if(localStorage.getItem('id') != this.cut.id) {

          swal({
            html:'<iframe src="https://www.facebook.com/plugins/post.php?href=' +
            this.cut.urls+ '&width=500&show_text=false& = &height=497' +
            '"  width="100%"height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>' +
            '<br>  <img src="' + this.cut.photo
            +
            '"  style="width: 30px; height: 30px; border-radius: 150px; -webkit-border-radius: 150px; -moz-border-radius: 150px;" /><b> ' +
            this.cut.user+'</b> <br>requested  1 '+this.cut.types
            +' for $ 1 dollar',

            confirmButtonText: 'Cancel',

            showLoaderOnConfirm: true,



          })


        }
      }
    });





	 }

  open2(  content) {

	   console.log(content);

    this.modalService.open(content).result.then((result) => {this.heroes
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
