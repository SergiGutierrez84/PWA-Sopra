import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';


@NgModule({
    imports: [
        RouterModule,
        SharedModule
    ],
    declarations: [
        AlertComponent
    ],
    exports: [AlertComponent]
})
export class AlertModule {

    static forRoot(): ModuleWithProviders<AlertModule> {
        return {
            ngModule: AlertModule,
            providers: [
                AlertComponent,
                AlertService
            ],
        };
    }

    static forChild(): ModuleWithProviders<AlertModule> {
        return {
            ngModule: AlertModule,
            providers: [
                AlertComponent
            ]
        };
    }
}
