import { Pipe, PipeTransform } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';

@Pipe({
  name: 'presentacion'
})
export class PresentacionPipe implements PipeTransform {
  
  constructor(private _servicio: ServicioService){
  }

  transform(nombre: string, lugar: string, edad: number, comidaFavorita: string): string {
    return `Hola, soy ${nombre} de ${lugar} , tengo ${edad} años y me gusta comer ${comidaFavorita}. El servicio es: ${this._servicio?.getNumero()}`;
  }

}
