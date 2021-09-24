import { Injectable } from '@angular/core';

import { IOptionsAlert } from './alert.interface';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class AlertService {
    private _subject = new Subject<any>();
    private _keepAfterNavigationChange = false;

    constructor() { }

    public success(message: string,
                   keepAfterNavigationChange = false,
                   title: string = 'Correcto',
                   options: IOptionsAlert = {}
    ): void {
        this._keepAfterNavigationChange = keepAfterNavigationChange;
        this._next(title, message, 'success', 'zmdi zmdi-check-circle', options);

        setTimeout(() => {
            this.clear();
        }, 5000);
    }

    public info(message: string,
                keepAfterNavigationChange = false,
                title: string = 'Información',
                options: IOptionsAlert = {}
    ): void {
        this._keepAfterNavigationChange = keepAfterNavigationChange;
        this._next(title, message, 'warning', 'zmdi zmdi-info', options);

        if (options.clear !== false) {
            setTimeout(() => {
                this.clear();
            }, 5000);
        }
    }

    public notify(message: string,
                  keepAfterNavigationChange = false,
                  title: string = 'Notificación',
                  options: IOptionsAlert = {}
    ): void {
        this._keepAfterNavigationChange = keepAfterNavigationChange;
        this._next(title, message, 'ligth', 'zmdi zmdi-notifications-active', options);

        if (options.clear !== false) {
            setTimeout(() => {
                this.clear();
            }, 5000);
        }
    }

    public error(message: string,
                 keepAfterNavigationChange = false,
                 title: string = 'Error',
                 options: IOptionsAlert = {}
    ): void {
        this._keepAfterNavigationChange = keepAfterNavigationChange;
        this._next(title, message, 'danger', 'zmdi zmdi-close-circle', options);

        if (options.clear !== false) {
            setTimeout(() => {
                this.clear();
            }, 4000);
        }
    }

    public getMessage(): Observable<any> {
        return this._subject.asObservable();
    }

    public clear(): void {
        this._subject.next();
    }

    private _next(title: string, message: string, type: string, icon: string, options: IOptionsAlert): void {
        this._subject.next({
            type,
            title,
            text: message,
            options,
            icon
        });
    }
}
