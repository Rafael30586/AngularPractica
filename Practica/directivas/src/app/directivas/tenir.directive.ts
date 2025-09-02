import { Directive, ElementRef, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appTenir]'
})
export class TenirDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = '#02ba05'
  }

}
