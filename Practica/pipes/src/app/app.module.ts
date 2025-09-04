import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { PorcentajePipe } from './pipes/porcentaje.pipe';
import { CambiarLetrasPipe } from './pipes/cambiar-letras.pipe';
import { PrefijoSufijoPipe } from './pipes/prefijo-sufijo.pipe';
import { PresentacionPipe } from './pipes/presentacion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    PorcentajePipe,
    CambiarLetrasPipe,
    PrefijoSufijoPipe,
    PresentacionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
