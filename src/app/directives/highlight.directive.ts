import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'white';
  @Input('appHighlight') highlightColor = 'green';

  private backgroundColor;

  @HostBinding('style.backgroundColor') get color() {
    return this.backgroundColor;
  }

  @HostListener('mouseenter', ['$event']) mouseenter(event) {
    this.backgroundColor = this.highlightColor;
    console.log(event.target);
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  constructor() {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
