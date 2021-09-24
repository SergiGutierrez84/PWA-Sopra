import { Component, OnInit, OnDestroy } from '@angular/core';
import { slideToLeft } from 'src/app/shared/animations/animation';

import { AlertService } from './alert.service';

import { IAlert } from './alert.interface';

import { Subscription } from 'rxjs';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    animations: [
        slideToLeft()
    ]
})
export class AlertComponent implements OnInit, OnDestroy {
    public messages: IAlert[] = [];
    private _subscriptions: Array<Subscription> = [];

    constructor(private _alertService: AlertService) {
    }

    ngOnInit(): void {
        this._subscriptions.push(this._alertService.getMessage().subscribe(message => {
            if (!message) {
                this.messages = [];
                return;
            }
            this.messages.push( message as IAlert);
        }));
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach((s) => s.unsubscribe());
    }

    public removeAlert(message: IAlert): void {
        this.messages = this.messages.filter(x => x !== message);
    }

    public getTypeClass(type: string): string {
        return `alert-${type}`;
    }

    public getDismissClass(clear: boolean): string {
        if (clear === false) {
            return 'alert-dismissible';
        }
        return '';
    }
}
