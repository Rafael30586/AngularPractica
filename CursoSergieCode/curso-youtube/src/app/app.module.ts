import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado.pipe';

@NgModule({
  declarations: [ //Acá van componentes
    AppComponent, PadreComponent, HijoComponent, HermanoComponent, EstiloHermanosDirective, MiPipePersonalizadoPipe
  ],
  imports: [ // Acá van algunos módulos
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], // Acá pueden ir o no componentes dependiendo de si está conectado con otros
  bootstrap: [AppComponent]
})
export class AppModule { }
