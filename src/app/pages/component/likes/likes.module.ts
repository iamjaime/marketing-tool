import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Likes } from './likes.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Facebook',
      urls: [{title: 'Home', url: '/starter'},{title: 'Facebook'},{title: 'Likes'}]
    },
	component: Likes
}];



@NgModule({
	imports: [

    	FormsModule,
    	CommonModule,
      ReactiveFormsModule,
      NgbModule.forRoot(),
    	RouterModule.forChild(routes),NgbModule.forRoot()
    ],
	declarations: [Likes]
})
export class LikesModule { }
