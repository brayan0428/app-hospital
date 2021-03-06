// tslint:disable-next-line: quotemark
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
// tslint:disable-next-line: quotemark
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.module';

import { APP_ROUTES } from './app.routing';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, APP_ROUTES, PagesModule,FormsModule,ReactiveFormsModule,ServicesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
