import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';

// Component
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [
        RouterModule,
        SharedModule,
        MatCardModule,
    ],
    declarations: [
        LayoutComponent,
        FooterComponent
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule { }
