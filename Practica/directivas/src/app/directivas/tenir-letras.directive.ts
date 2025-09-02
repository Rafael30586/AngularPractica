import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTenirLetras]'
})
export class TenirLetrasDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') alEntrarElMouse(){
    this.alumbrar('#52ef78')
  }

  @HostListener('mouseleave') alSalirElMouse(){
    this.alumbrar('#2230c5')
  }

  private alumbrar(color: string){
    this.element.nativeElement.style.color = color
  }

}
