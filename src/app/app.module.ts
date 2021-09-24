import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Services
import { AuthService } from './core/authentication/auth.service';
import { MomentService } from './core/services/moment.service';

// Modules
import { AlertModule } from './shared/components/alert/alert.module';
import { AppRoutingModule } from './app-routing.module';
import { MessageDialogModule } from './shared/components/dialog/message/message.module';
import { ServiceWorkerModule } from '@angular/service-worker';

// Components
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AlertModule.forRoot(),
        MessageDialogModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        AuthService,
        MomentService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
