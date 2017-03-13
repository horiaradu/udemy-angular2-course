import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    {{ result.name }}
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {
  @Input()
  result: any = {};

  ngOnInit() {
    // this.result.name = 'Radu';
  }
}
