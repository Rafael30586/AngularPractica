import { Component, DoCheck, OnInit } from '@angular/core';
import { FotosService } from '../servicios/fotos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit, DoCheck{

  data$: Observable<number> // va el signo $ porque es asíncrono. No es necesario pero es buena práctica
  urlImagen?: string

  constructor(private fotosService: FotosService){
    this.data$ = this.fotosService.getNumeroFotos()
  }

  ngDoCheck(): void {
    this.asignarUrlImagen()
  }
  ngOnInit(): void {
  }

  asignarUrlImagen(){
    this.data$.subscribe((numero)=>{
      switch(numero){
        case 1: this.urlImagen = "https://cdn.mos.cms.futurecdn.net/rTgQXxbMnTHQdWMTAxxbwV.jpg";break;
        case 2: this.urlImagen = "https://www.nintenderos.com/wp-content/uploads/2022/03/kirby-yl.jpg";break;
        case 3: this.urlImagen = "https://wallpapers.com/images/hd/final-fantasy-7-cloud-strife-zi408mgiahwemi7v.jpg";break;
        case 4: this.urlImagen = "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/02/donkeykongcountryreturnshd.jpg";break;
      }

    })
  }

}
