import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";

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
        username: ['Horia', [Validators.required, this.exampleValidator], [this.asyncExampleValidator]],
        email: ['horia@radu.com',
          [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+")]
        ]
      }),
      password: ['', Validators.required],
      gender: ['male'],
      hobbies: this.formBuilder.array([
        ['Cooking', Validators.required]
      ])
    });

    this.myForm.valueChanges.subscribe((data: any) => {
      console.log(data);
    });

    this.myForm.statusChanges.subscribe((data: any) => {
      console.log(data);
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }

  addHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required));
  }

  exampleValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Example') {
      return { example: true };
    } else {
      return null;
    }
  }

  asyncExampleValidator(control: FormControl): Promise<any>|Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'AsyncExample') {
          resolve({ invalid: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
