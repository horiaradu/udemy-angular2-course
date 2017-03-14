import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./routes/home-component.component";
import { UserComponent } from "./routes/user/user.component";
import { USER_ROUTES } from "./routes/user/user.routes";

const APP_ROUTES: Routes = [
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
  { path: '', component: HomeComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
