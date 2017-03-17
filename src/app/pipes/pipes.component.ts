import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: 'pipes.component.html',
  styles: []
})
export class PipesComponent {
  myValue = 'lowercase';
  myDate = new Date();
  values = ['Milk', 'Bread', 'Beans'];
  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data is here'), 2000)
  })
}
