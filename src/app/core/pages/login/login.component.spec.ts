import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { AuthService } from '../../authentication/auth.service';
import { MomentService } from '../../services/moment.service';

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let button: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterModule,
                FormsModule
            ],
            declarations: [LoginComponent],
            providers: [
                AuthService,
                AlertService,
                MomentService,
                {provide: Router, useValue: routerSpy}
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        button = fixture.nativeElement.querySelector('button');
    });

    it('should display the text of the login button', () => {
        expect(button.textContent).toEqual('Login');
    });

    it('created a form with username and password input and login button', () => {
        const usernameContainer = fixture.debugElement.nativeElement.querySelector('username');
        const passwordContainer = fixture.debugElement.nativeElement.querySelector('password');

        expect(usernameContainer).toBeDefined();
        expect(passwordContainer).toBeDefined();
        expect(button).toBeDefined();
      });
});
