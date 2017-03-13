import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClick('foo')">Click</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output()
  clicked = new EventEmitter<number>();

  onClick(param) {
    console.log('clicked!');
    console.log(param);

    this.clicked.emit(Math.random());
  }
}
