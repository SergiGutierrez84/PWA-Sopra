import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from 'src/app/core/authentication/auth.service';
import { MomentService } from 'src/app/core/services/moment.service';
import { MessageDialogService } from 'src/app/shared/components/dialog/message/message.service';

import { HomeComponent } from './home.component';

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let h2: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterModule,
                MatDialogModule
            ],
            declarations: [HomeComponent],
            providers: [
                AuthService,
                MomentService,
                MessageDialogService,
                {provide: Router, useValue: routerSpy}
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        h2 = fixture.nativeElement.querySelector('h2');
    });

    it('should display the text Welcome !', () => {
        expect(h2.textContent).toEqual('Welcome !');
    });
});
