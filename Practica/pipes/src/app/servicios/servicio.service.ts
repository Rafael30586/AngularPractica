import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService implements OnInit{

  numero: number = 10

  constructor() { 
    this.numero = 5
  }

  ngOnInit(): void {
    this.numero = 6
  }

  public getNumero(){
    return this.numero
  }

  public setNumero(numero: number){
    this.numero = numero
  }
}
