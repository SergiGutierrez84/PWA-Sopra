import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './login.component';

import { LOGIN_ROUTING } from './login.routing';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        LOGIN_ROUTING
    ],
    declarations: [
        LoginComponent
    ],

})
export class LoginModule { }
