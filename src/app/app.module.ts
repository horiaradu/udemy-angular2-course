import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from "ng2-bootstrap";

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { WithPassedHtmlComponent } from './with-passed-html/with-passed-html.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { LifecycleComponent } from './lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { CmpAComponent } from "./service/cmp-a.component";
import { CmpBComponent } from "./service/cmp-b.component";
import { ServiceComponent } from "./service/service.component";
import { LogService } from "./service/log.service";
import { HomeComponent } from "./routes/home-component.component";
import { UserComponent } from "./routes/user/user.component";
import { UserDetailComponent } from "./routes/user/user-detail.component";
import { UserEditComponent } from "./routes/user/user-edit.component";
import { routing } from "./app.routes";
import { UserDetailGuard } from "./routes/user/user-detail.guard";
import { UserEditGuard } from "./routes/user/user-edit.guard";
import { DataDrivenComponent } from "./forms/data-driven/data-driven.component";
import { TemplateDrivenComponent } from "./forms/template-driven/template-driven.component";
import { PipesComponent } from './pipes/pipes.component';
import { DoublePipe } from './pipes/double.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    WithPassedHtmlComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifecycleComponent,
    DirectivesComponent,
    HighlightDirective,
    UnlessDirective,
    CmpAComponent,
    CmpBComponent,
    ServiceComponent,
    HomeComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    DataDrivenComponent,
    TemplateDrivenComponent,
    PipesComponent,
    DoublePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [LogService, UserDetailGuard, UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
