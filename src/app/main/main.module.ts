import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from '../core/pages/layout/layout.module';
import { CoreModule } from '../core/core.module';

// Component
import { MainComponent } from './main.component';

// Routes
import { MAIN_ROUTING } from './main.routing';

@NgModule({
  imports: [
    MAIN_ROUTING,
    SharedModule,
    CoreModule,
    LayoutModule
  ],
  declarations: [
      MainComponent
  ],
  exports: [
      MainComponent
  ]
})
export class MainModule { }
