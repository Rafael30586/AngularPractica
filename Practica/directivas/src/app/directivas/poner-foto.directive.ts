import { Directive, OnInit, ElementRef, DoCheck } from '@angular/core';
import { UnServicioService } from '../servicios/un-servicio.service';

@Directive({
  selector: '[appPonerFoto]'
})
export class PonerFotoDirective implements OnInit, DoCheck{

  numeroFoto?: number
  constructor(private _unServicioService: UnServicioService, private element: ElementRef) { }
  

  ngOnInit(): void {
    this.numeroFoto = this._unServicioService.getNumeroFoto()
    switch(this.numeroFoto){
      case 1: this.element.nativeElement.setAttribute('src','https://i2-prod.mirror.co.uk/gaming/article29982164.ece/ALTERNATES/s1200d/0_Link-master-sword.jpg');break;
      case 2: this.element.nativeElement.setAttribute('src','https://rare-gallery.com/uploads/posts/207459-samus-aran-1920x1080.jpg');break;
      case 3: this.element.nativeElement.setAttribute('src','https://static1.thegamerimages.com/wordpress/wp-content/uploads/2017/03/Super-Mario-Sunshine-1.jpg');break;
    }
  }

  ngDoCheck(): void {
    this.numeroFoto = this._unServicioService.getNumeroFoto()
    switch(this.numeroFoto){
      case 1: this.element.nativeElement.setAttribute('src','https://i2-prod.mirror.co.uk/gaming/article29982164.ece/ALTERNATES/s1200d/0_Link-master-sword.jpg');break;
      case 2: this.element.nativeElement.setAttribute('src','https://rare-gallery.com/uploads/posts/207459-samus-aran-1920x1080.jpg');break;
      case 3: this.element.nativeElement.setAttribute('src','https://static1.thegamerimages.com/wordpress/wp-content/uploads/2017/03/Super-Mario-Sunshine-1.jpg');break;
    }
  }

}
