import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

// Interfaces
import { IMessageOptions } from './message.interface';

@Component({
    selector: 'app-message-dialog',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageDialogComponent {

    public title: string;
    public message: string;
    public buttons: string;
    public options: IMessageOptions;

    constructor(
        public dialogRef: MatDialogRef<MessageDialogComponent>
    ) {  }
}
