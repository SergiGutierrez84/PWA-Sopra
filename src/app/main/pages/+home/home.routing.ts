import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

export const ROUTING = RouterModule.forChild(ROUTES);
