import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./routes/home-component.component";
import { UserComponent } from "./routes/user/user.component";
import { USER_ROUTES } from "./routes/user/user.routes";
import { SignupComponent } from "./auth/unprotected/signup.component";
import { SigninComponent } from "./auth/unprotected/signin.component";
import { ProtectedComponent } from "./auth/protected/protected.component";
import { AuthGuard } from "./auth/shared/auth.guard";

const APP_ROUTES: Routes = [
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
  { path: 'user', redirectTo: '/user/1', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: 'auth', redirectTo: '/auth/signup', pathMatch: 'full' },
  { path: '**', redirectTo: '/user/1', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
