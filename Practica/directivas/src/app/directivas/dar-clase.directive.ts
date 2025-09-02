import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDarClase]'
})
export class DarClaseDirective implements OnInit{

  constructor(private elemento: ElementRef) { }


  ngOnInit(): void {
    this.elemento.nativeElement.classList.add('caja-naranja')
  }


}
