import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [
  {path: '',redirectTo:'navigation/login', pathMatch:'full'},
  {path: 'navigation/login', component: LoginComponent},
  {path: 'navigation/register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
