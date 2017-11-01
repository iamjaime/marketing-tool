import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Post } from './posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Facebook - Posts',
      urls: [{title:  'Home', url: '/starter'},{title: 'Facebook'},{title: 'Posts'}]
    },
	component: Post
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      HttpModule,
      JsonpModule,
      NgbModule.forRoot(),
    	RouterModule.forChild(routes),NgbModule.forRoot()
    ],
	declarations: [Post]
})
export class PostsModule { }
