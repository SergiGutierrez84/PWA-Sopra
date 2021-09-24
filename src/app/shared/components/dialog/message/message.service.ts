import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { MessageDialogComponent } from './message.component';

import { IMessageOptions } from './message.interface';

import { Observable } from 'rxjs';

@Injectable()
export class MessageDialogService {

    constructor(private dialog: MatDialog) {
    }

    public message(title: string, message: string, buttons: string = null, options: IMessageOptions = {}): Observable<any> {

        let dialogRef: MatDialogRef<MessageDialogComponent>;
        dialogRef = this.dialog.open(MessageDialogComponent, {
            disableClose: true,
            maxWidth: '450px',
            minWidth: '300px',
        });
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.buttons = buttons;
        dialogRef.componentInstance.options = options;

        return dialogRef.afterClosed();
    }
}
