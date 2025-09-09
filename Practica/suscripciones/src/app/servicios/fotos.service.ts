import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FotosService {

  private numeroFotos$: BehaviorSubject<number> = new BehaviorSubject<number>(1)

  // Behavior subject es un observable que tiene caché, es decir, cada vez que s eenvíen datos, se va a guardar el último, y cuando un 
  // componente se suscriba va a obtener ese dato
  constructor() {
    
   }

  
  getNumeroFotos(){
    return this.numeroFotos$.asObservable() // Esto es para que no puedan hacer emisiones, y solo sea para suscribirse
  }

  setNumeroFotos(data: number){
    this.numeroFotos$.next(data)
  }
}
