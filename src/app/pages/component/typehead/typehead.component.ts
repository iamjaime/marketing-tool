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


 

@Injectable()
export class WikipediaService {
 
  
}

@Component({
	selector: 'ngbd-pagination',
	templateUrl: './typehead.component.html',
	providers: [WikipediaService]
}) 
 
export class NgbdtypeheadBasic{
  public model: any;
  enlace:any;
  model2: any;
  searching = false;
  searchFailed = false;

  constructor(private _service: WikipediaService) {}
  
  ver(){
 this.enlace= this.model ;
  }
}
