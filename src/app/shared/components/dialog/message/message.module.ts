import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { MessageDialogComponent } from './message.component';

// Services
import { MessageDialogService } from './message.service';


@NgModule({
    imports: [
        SharedModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [
        MessageDialogComponent
    ],
    entryComponents: [
        MessageDialogComponent
    ],
    providers: [
        MessageDialogService
    ],
    exports: [
        MessageDialogComponent
    ]
})
export class MessageDialogModule { }
