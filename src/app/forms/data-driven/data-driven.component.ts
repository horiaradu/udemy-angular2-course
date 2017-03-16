import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // this.myForm = new FormGroup({
    //   userData: new FormGroup({
    //     username: new FormControl('Horia', Validators.required),
    //     email: new FormControl('horia@radu.com',
    //       [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+")]
    //     )
    //   }),
    //   password: new FormControl('', Validators.required),
    //   gender: new FormControl('male'),
    //   hobbies: new FormArray([
    //     new FormControl('Cooking', Validators.required)
    //   ])
    // });

    this.myForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        username: ['Horia', Validators.required],
        email: ['horia@radu.com',
          [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+")]
        ]
      }),
      password: ['', Validators.required],
      gender: ['male'],
      hobbies: this.formBuilder.array([
        ['Cooking', Validators.required]
      ])
    })
  }

  onSubmit() {
    console.log(this.myForm);
  }

  addHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required));
  }
}
