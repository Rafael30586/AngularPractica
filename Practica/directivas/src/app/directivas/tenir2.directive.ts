import { Directive, Input, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTenir2]'
})
export class Tenir2Directive implements OnInit{

  @Input() appTenir2?: string
  @Input() colorLetra?: string

  constructor(private element: ElementRef) { }
  
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.appTenir2
    this.element.nativeElement.style.color = this.colorLetra 
  }

}
