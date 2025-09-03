import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { TenirDirective } from './directivas/tenir.directive';
import { TenirLetrasDirective } from './directivas/tenir-letras.directive';
import { Tenir2Directive } from './directivas/tenir2.directive';
import { DarClaseDirective } from './directivas/dar-clase.directive';
import { PonerFotoDirective } from './directivas/poner-foto.directive';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    TenirDirective,
    TenirLetrasDirective,
    Tenir2Directive,
    DarClaseDirective,
    PonerFotoDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
