import { fakeAsync, tick } from '@angular/core/testing';

import { UserService } from '../services/mock/user.service';
import { MomentService } from '../services/moment.service';
import { AuthService } from './auth.service';

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

describe('AuthService', () => {
    const mockUserService = new UserService();
    const momentService = new MomentService();
    let service: AuthService;
    beforeEach(() => { service = new AuthService(mockUserService, routerSpy, momentService); });

    it('is not isAuthenticated', () => {
        expect(service.isAuthenticated()).toBeFalse();
    });

    it('is isAuthenticated', () => {
        sessionStorage.setItem('auth.auth_token', 'auth.token_mock');
        expect(service.isAuthenticated()).toBeTrue();

        sessionStorage.removeItem('auth.auth_token');
    });

    it('#loginMethod should return login succes', (done: DoneFn) => {
        service.login({ username: 'user1', password: '***' }).subscribe(value => {
            expect(value.user?.username).toEqual('user1');
            done();
        });
    });

    it('#loginMethod should return login succes', fakeAsync(() => {
        service.logout();
        tick(50);
        expect(service.user).toBeUndefined();
    }));

});
