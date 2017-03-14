import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./routes/home-component.component";
import { UserComponent } from "./routes/user/user.component";

const APP_ROUTES: Routes = [
  { path: 'user', component: UserComponent },
  { path: '', component: HomeComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
