import { Pipe, PipeTransform } from '@angular/core';
import { CambiarLetra } from '../models/CambiarLetra';

@Pipe({
  name: 'cambiarLetras'
})
export class CambiarLetrasPipe implements PipeTransform {

  transform(value: string, cambio: string): string {
    if(cambio === 'L' || cambio === 'l'){
      return value.toLowerCase()
    }else if(cambio === 'U' || cambio === 'u'){
      return value.toUpperCase()
    }else{
      return value
    }    
  }
}
