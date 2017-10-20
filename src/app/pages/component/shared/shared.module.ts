import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdsharedBasic } from './shared.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';
const routes: Routes = [{
	path: '',
	data: {
      title: 'Facebook - Shared',
      urls: [{title:  'Home', url: '/starter'},{title: 'Facebook'},{title: 'Shared'}]
    },
	component: NgbdsharedBasic
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
	declarations: [NgbdsharedBasic]
})
export class SharedModule { }
