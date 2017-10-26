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
            title: '<i>New</i> <u>Job</u>',
            type: 'info',
            html:
            'give a like on the next page, ' +
            '<a href="https://www.facebook.com/PirelliMexico/photos/a.1403127936620711.1073741828.1402819096651595/1963038563962976/?type=3&theater">links</a> ' +
            'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down',
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
