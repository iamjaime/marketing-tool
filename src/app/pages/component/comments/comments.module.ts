import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Comments } from './comments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';
const routes: Routes = [{
	path: '',
	data: {
      title: 'Facebook',
      urls: [{title:  'Home', url: '/starter'},{title: 'Facebook'},{title: 'Comments'}]
    },
	component: Comments
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
	declarations: [Comments]
})
export class CommentsModule { }
