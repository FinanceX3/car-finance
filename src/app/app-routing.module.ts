import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {CarsListComponent} from "./pages/cars-list/cars-list.component";
import {AddDataTableComponent} from "./pages/add-data-table/add-data-table.component";

const routes: Routes = [
  {path: '',redirectTo:'navigation/welcome', pathMatch:'full'},
  {path: 'navigation/welcome', component: WelcomeComponent},
  {path: 'navigation/login', component: LoginComponent},
  {path: 'navigation/home', component: HomeComponent},
  {path: 'navigation/register', component: RegisterComponent},
  {path: 'navigation/list-cars', component: CarsListComponent},
  {path: 'navigation/add-data-table', component: AddDataTableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
