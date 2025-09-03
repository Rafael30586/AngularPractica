import { Component } from '@angular/core';
import { UnServicioService } from '../servicios/un-servicio.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {
  color = '#066727'
  color2 = '#c645d9'

  constructor(private _unServicioService: UnServicioService){
  }

  public cambiarFoto(){
    this._unServicioService.cambiarFoto()
  }
}
