import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-user-component',
  template: `
    <h1>User Component</h1>
    <a [routerLink]="['../']">Back</a>
    
    <button (click)="onNavigate()">Go Home</button>
    
    <hr>
    {{id}}
  `
})
export class UserComponent implements OnDestroy {
  id: string;
  private subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.params.subscribe(
      param => {
        this.id = param['id'];
      }
    );
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
