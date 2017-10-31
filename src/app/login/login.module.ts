import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,NgbModule.forRoot ()

    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
