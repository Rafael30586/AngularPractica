import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = "#41b4f8"
    this.element.nativeElement.style.color = "#9da623"
    this.element.nativeElement.style.padding = "5px" 
    this.element.nativeElement.style.textAlign = "center"
  }

}
