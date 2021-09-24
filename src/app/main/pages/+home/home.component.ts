import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from 'src/app/core/authentication/auth.service';
import { MomentService } from 'src/app/core/services/moment.service';
import { MessageDialogService } from 'src/app/shared/components/dialog/message/message.service';

// Interfaces
import { IUserModel } from 'src/app/core/interfaces/user.interface';
import { IAuth } from 'src/app/core/interfaces/core.interface';

import { first, map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public user: IUserModel;
    public counterPieces: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
    };

    constructor(
        private _messageDialogService: MessageDialogService,
        private _authService: AuthService,
        private _momentService: MomentService
    ) { }

    ngOnInit(): void {
        this._authService.auth$.pipe(
            first(response => !!(response && response.user)),
            map((response: IAuth) => response.user)).
            subscribe((user: IAuth['user']) => {
                this.user = user;
                if (user && localStorage.getItem(user.username)) {
                    this._countdownTimer(localStorage.getItem(user.username));
                }
            });
    }

    public signOut(): void {
        this._messageDialogService.message('Desea cerrar sesión',
            'Cerrando sesión del navegador mejoras la seguridad y así evitar el acceso no autorizado desde este navegador.', null,
            { icon: 'Question' }
        )
            .subscribe(res => {
                if (res) {
                    this._authService.logout();
                }
            });
    }

    private _countdownTimer(time: string): void {
        const difference = +this._momentService.moment() - +this._momentService.moment(time);

        if (difference > 0) {
            this.counterPieces = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
                minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
                seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
            };
        }
    }
}
