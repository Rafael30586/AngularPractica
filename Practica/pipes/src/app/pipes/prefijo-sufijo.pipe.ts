import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefijoSufijo'
})
export class PrefijoSufijoPipe implements PipeTransform {

  transform(value: string, prefijo: string, sufijo?: string): string {
    if(sufijo === undefined){
      return `${prefijo}${value}`
    }else{
      return `${prefijo}${value}${sufijo}`
    }
  }

}
