import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdfaceBasic } from './face.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Facebook',
      urls: [{title:  'Home', url: '/starter'},{title: 'Facebook'}]
    },
	component: NgbdfaceBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      HttpModule,
      JsonpModule,
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdfaceBasic]
})
export class FaceModule { }
