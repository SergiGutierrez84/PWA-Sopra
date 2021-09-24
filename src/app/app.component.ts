import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from './core/authentication/auth.service';
import { UserService } from './core/services/mock/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        public authService: AuthService,
        private _mockUserService: UserService
    ) {}

    ngOnInit(): void {

        if (this.authService.isAuthenticated()) {
            /* Recovers user logged in from user service after reloading the page */
            const userLoggedIn = this._mockUserService.getUser('token', sessionStorage.getItem('auth.auth_token'));
            if (userLoggedIn) {
                this.authService.authSuccess( {
                    token: userLoggedIn.token,
                    user: userLoggedIn
                });
            } else {
                this.authService.closeSession();
            }
        } else {
            this.authService.closeSession();
        }
    }
}
