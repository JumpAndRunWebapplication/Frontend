import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageRegistrationComponent} from "./page-registration/page-registration.component";
import {PageLoginComponent} from "./page-login/page-login.component";
import {PageMainMenuComponent} from "./page-main-menu/page-main-menu.component";

const routes: Routes = [
  {path:'', component:PageLoginComponent},
  {path:'registration', component:PageRegistrationComponent},
  {path:'login', component:PageLoginComponent},
  {path:'mainPage', component:PageMainMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
