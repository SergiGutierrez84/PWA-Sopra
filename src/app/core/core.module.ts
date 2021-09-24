// Cree una CoreModule con providers para los servicios únicos que carga cuando se inicia la aplicación.
// Importar solo CoreModule en la raíz AppModule. Nunca importe CoreModule en ningún otro módulo.

import { NgModule, Optional, SkipSelf } from '@angular/core';

// Services
import { AuthGuardService } from './authentication/auth-guard.service';

@NgModule({
    providers: [
        AuthGuardService
    ]
})

export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
