import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnServicioService implements OnInit{

  numeroFoto: number = 1
  pinkParty: boolean = false

  constructor() { }
  
  public setNumeroFoto(numeroFoto: number){
    this.numeroFoto = numeroFoto
  }

  public getNumeroFoto(){
    return this.numeroFoto
  }

  public cambiarFoto(){
    switch(this.numeroFoto){
      case 1: this.setNumeroFoto(2);break;
      case 2: this.setNumeroFoto(3);break;
      case 3: this.setNumeroFoto(1);break;
    }
    //console.log('Cambiando a numero: ',this.numeroFoto)
  }

  public changeColor(){
    if(!this.pinkParty){
      this.pinkParty = true
    }else{
      this.pinkParty = false
    }
  }

  public getColor(){
    return this.pinkParty
  }

  ngOnInit(): void {
    // this.setNumeroFoto(1)
    //console.log('Numero foto desde el servicio:',this.numeroFoto)
  }
}
