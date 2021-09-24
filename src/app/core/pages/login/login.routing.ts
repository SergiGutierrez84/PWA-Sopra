import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const ROUTES: Routes = [
    { path: '', component: LoginComponent }
];

export const LOGIN_ROUTING = RouterModule.forChild(ROUTES);
