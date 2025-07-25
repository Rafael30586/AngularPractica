import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit{

  constructor(private _servicioFamiliar: ServicioFamiliarService){
  
 }

 nombre?: string

 ngOnInit(): void {
    this._servicioFamiliar.setHermanoChico('Pedro')
    this.nombre = this._servicioFamiliar.getHermanoChico()
    
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '')
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }

}
