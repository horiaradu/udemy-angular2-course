import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private backgroundColor = 'white';

  @HostBinding('style.backgroundColor')
  get color() {
    return this.backgroundColor;
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.backgroundColor = 'green';
  };

  @HostListener('mouseleave')
  mouseleave() {
    this.backgroundColor = 'white';
  };

  constructor() {
  }

}
