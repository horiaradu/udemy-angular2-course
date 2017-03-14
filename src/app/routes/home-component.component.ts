import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  private subscription: Subscription;
  param: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      param => {
        this.param = param['analytics'];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
