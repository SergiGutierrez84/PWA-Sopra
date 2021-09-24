import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/core/authentication/auth-guard.service';

import { MainComponent } from './main.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../main/pages/+home/home.module').then(m => m.HomeModule),
                canActivate: [AuthGuardService]
            }
        ]
    }
];

export const MAIN_ROUTING = RouterModule.forChild(ROUTES);
