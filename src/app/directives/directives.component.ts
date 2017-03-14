import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  private switchVal = true;

  onSwitch() {
    this.switchVal = !this.switchVal;
  }

  private items = [1, 2, 3, 4, 5];

  private value = 100;
}
