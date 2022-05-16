import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { PwdResetComponent } from './pwd-reset/pwd-reset.component';
import { AdministrationComponent } from './administration/administration.component';
import { ProductsAllComponent } from './products-all/products-all.component';
import { UserAllComponent } from './user-all/user-all.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'adminnav',component:AdminNavComponent},
  {path:'pwdreset',component:PwdResetComponent},
  {path:'admin',component:AdministrationComponent},
  {path:'allproducts',component:ProductsAllComponent},
  {path:'alluser',component:UserAllComponent},
  {path:'adduser',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
