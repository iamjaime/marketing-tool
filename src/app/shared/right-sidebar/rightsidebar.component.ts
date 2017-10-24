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
  
  
  private urls = 'http://192.168.1.72:3001';
	
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
	 heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	 
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
     
    this.socket.emit('set-nickname', this.name);
    this.socket.on('users-changed', (data) => {
			 this.users=data;
			 var items: number[] = [];
			 for(var i = 1; i <=  this.users; i++){
					items;
			 }
			 console.log( items);
       
    });
	}
}
