import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { UserService } from '../services/mock/user.service';
import { MomentService } from '../services/moment.service';

// Interfaces
import { IAuth, IBodyLogin } from '../interfaces/core.interface';
import { IUserModel } from '../interfaces/user.interface';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

    private _cachedAuth: IAuth;
    private _authSource = new BehaviorSubject<IAuth>(undefined); // Value of auth user
    private _authStreamSource: BehaviorSubject<boolean> = new BehaviorSubject(false); // For know Is logged

    public auth$: Observable<IAuth> = this._authSource.asObservable();
    public authStream$: Observable<boolean> = this._authStreamSource.asObservable();
    public get user(): IUserModel | undefined { return (this._cachedAuth) ? this._cachedAuth.user : undefined; }

    constructor(
        private _mockUserService: UserService,
        private _router: Router,
        private _momentService: MomentService
    ) { }

    public isAuthenticated(): boolean {
        if (sessionStorage.getItem('auth.auth_token')) {
            this._authStreamSource.next(true);
            return true;
        } else {
            this._authStreamSource.next(false);
            return false;
        }
    }

    public login(body: IBodyLogin): Observable<any> {
        const obs = new Observable((subscriber) => {
            setTimeout(() => {
                const userLoggedIn = this._mockUserService.getUser('username', body.username);
                if (userLoggedIn) {
                    subscriber.next({
                        token: userLoggedIn.token,
                        user: userLoggedIn
                    } as IAuth);
                } else {
                    subscriber.error();
                }

                subscriber.complete();
            }, 500);
        });
        return obs;
    }

    public authSuccess(auth: IAuth): void {
        if (auth?.user) {

            if (!this._cachedAuth) {
                this._cachedAuth = auth;
            } else {
                this._cachedAuth = Object.assign({}, this._cachedAuth, auth);
            }

            if (auth.token) {
                sessionStorage.setItem('auth.auth_token', auth.token);
            }

            localStorage.setItem(`${auth.user.username}.bck`, this._momentService.moment().toString());

            this._authSource.next(auth);
            this._authStreamSource.next(true);
        } else {
            this._authStreamSource.next(false);
        }
    }

    public logout(): void {

        new Observable((subscriber) => {
            setTimeout(() => {
                subscriber.next();
                subscriber.complete();
            }, 50);
        })
            .subscribe(() => {
                this.closeSession();
            });
    }

    public closeSession(): void {
        sessionStorage.removeItem('auth.auth_token');
        sessionStorage.removeItem('auth.refresh_token');

        if (this._cachedAuth) {
            localStorage.setItem(this._cachedAuth.user.username, localStorage.getItem(`${this._cachedAuth.user.username}.bck`));
            localStorage.removeItem(`${this._cachedAuth.user.username}.bck`);

            this._cachedAuth = undefined;
        }

        this._authStreamSource.next(false);
        this._router.navigate(['/login']);
    }
}
