import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string;
  hermanoPequeno?: string;

  getHermanoGrande(){
    return this.hermanoGrande || ''
  }

  setHermanoGrande(hermano: string){
    this.hermanoGrande = hermano
  }

  getHermanoChico(){
    return this.hermanoPequeno || ''
  }

  setHermanoChico(hermano: string){
    this.hermanoPequeno = hermano
  }


  saludar(hermano: string){
    console.log(`Hola ${hermano}`)
  }

  preguntarPorHijo():string{
    return '¿Como está tu hijo?'
  }

  constructor() { }
}
