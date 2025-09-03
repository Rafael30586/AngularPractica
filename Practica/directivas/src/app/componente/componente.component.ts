import { Component, DoCheck } from '@angular/core';
import { UnServicioService } from '../servicios/un-servicio.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements DoCheck{
  color = '#066727'
  color2 = '#c645d9'

  pinkParty?: boolean 

  constructor(private _unServicioService: UnServicioService){
  }
  

  public cambiarFoto(){
    this._unServicioService.cambiarFoto()
  }

  public cambiarColor(){
    this._unServicioService.changeColor()
  }

  ngDoCheck(): void {
    this.pinkParty = this._unServicioService.getColor()
  }
}
