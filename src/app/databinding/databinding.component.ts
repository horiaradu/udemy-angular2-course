import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is a string';
  numberInterpolation = 2;
  result = { name: 'Horia' };

  onClick(event: number) {
    console.log(event);
  }
}
