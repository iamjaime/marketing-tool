import { Component} from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-accordion-basic',
	templateUrl: 'accordion.component.html'
})
export class NgbdAccordionBasic  {
  photo:any;
  name:any;
  email:any;
  constructor() {}
  ngOnInit() {
    this.photo =localStorage.getItem('photo');
    this.name =localStorage.getItem('name');
    this.email =localStorage.getItem('email');
      
          console.log(this.photo ); 
    }

  buy(){
    alert('buy likes in facebook');
  }
  
}
