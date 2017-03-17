import { Component, OnDestroy } from "@angular/core";
import { AuthService } from "./auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'my-header',
  template: `
       
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
                        <li><a [routerLink]="['auth', 'signup']">Sign Up</a></li>
                        <li><a [routerLink]="['auth', 'signin']">Sign In</a></li>
                        <li><a [routerLink]="['auth', 'protected']">Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
        
                        <li *ngIf="isAuthenticated" (click)="logout()" style="cursor: pointer;"><a>Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `
})
export class HeaderComponent implements OnDestroy {
  isAuthenticated = false;
  private subscription: Subscription;

  constructor(private authService: AuthService) {
    this.subscription = this.authService.isAuthenticated()
      .subscribe(status => {
        this.isAuthenticated = status;
      })
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
