import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShawdow]'
})
export class ShawdowDirective {

  constructor(private elementRef: ElementRef,private renderer: Renderer2) 
  {

  }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow','10px 10px 20px #dcdcdc');
  }
  
  @HostListener('mouseover')
  ondragover(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color','#ff0000');
  }

  @HostListener('mouseout')
  ondragout(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color','#000000');
  }
}
