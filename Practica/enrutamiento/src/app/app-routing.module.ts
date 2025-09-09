import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotoComponent } from './foto/foto.component';
import { TextoComponent } from './texto/texto.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: 'foto', component: FotoComponent},
  {path: 'texto', component: TextoComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: '**', redirectTo: '/foto',pathMatch: 'full'} // Esto sirve para cuando se ingresa una url que no està entre las programadas, en este caso, que se adistinta de foto, texto o formulario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
