import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdministrationComponent } from './administration/administration.component';
import { ReportComponent } from './report/report.component';
import { PwdResetComponent } from './pwd-reset/pwd-reset.component';
import{HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    ContactusComponent,
    MainNavComponent,
    SignupComponent,
    AdminNavComponent,
    AdministrationComponent,
    ReportComponent,
    PwdResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
