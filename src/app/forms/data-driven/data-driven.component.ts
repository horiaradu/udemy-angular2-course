import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;

  genders = ['male', 'female'];

  constructor() {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('Horia', Validators.required),
        email: new FormControl('horia@radu.com',
          [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+")]
        )
      }),
      password: new FormControl('', Validators.required),
      gender: new FormControl('male')
    })
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
