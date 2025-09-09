import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FotoComponent } from './foto/foto.component';
import { Foto2Component } from './foto2/foto2.component';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    Foto2Component,
    BotonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
