import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { HomeComponent } from './home.component';

// Routes
import { ROUTING } from './home.routing';


@NgModule({
  imports: [
    SharedModule,
    MatButtonModule,
    ROUTING
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
