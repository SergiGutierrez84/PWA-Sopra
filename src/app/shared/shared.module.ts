// SharedModule existe para que los componentes, directivas y tuberías
//  de uso común estén disponibles para su uso en las plantillas de componentes
//  de muchos otros módulos.
// Los servicios deben importarse en el CORE module

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule
    ]
})
export class SharedModule { }
