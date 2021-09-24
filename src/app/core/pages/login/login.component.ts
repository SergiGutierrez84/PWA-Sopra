import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { AuthService } from '../../authentication/auth.service';

// Interfaces
import { IAuth, IBodyLogin } from '../../interfaces/core.interface';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public model: IBodyLogin;

    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _alertService: AlertService,
    ) {
        this.model = {
            username: '',
            password: ''
        };
     }

    ngOnInit(): void {
        if (this._authService.isAuthenticated()) {
            this._router.navigate(['/']);
        }
    }

    public login(): void {
        this._authService.login(this.model).subscribe(
            (data: IAuth) => {
                this._authService.authSuccess(data);
                this._router.navigate(['/']);
            },
            () => {
                this._alertService.error('Incorrect username or password', true);
            }
        );
    }
}
