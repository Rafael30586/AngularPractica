import { Component, DoCheck, OnInit } from '@angular/core';
import { FotosService } from '../servicios/fotos.service';


@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit, DoCheck{

  numeroFoto: number = 1

  constructor(private fotosService: FotosService){
    this.fotosService.setNumeroFotos(this.numeroFoto)

  }
  ngDoCheck(): void {
    this.fotosService.setNumeroFotos(this.numeroFoto)
  }

  ngOnInit(): void {
    this.fotosService.setNumeroFotos(this.numeroFoto)
  }

  cambiarNumero(){
    switch(this.numeroFoto){
      case 1: 
      case 2:
      case 3: this.numeroFoto++;break;   
      case 4: this.numeroFoto = 1;break;
    }
  }

}
