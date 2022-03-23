import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Public Components
import {LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:"login",component:LoginPageComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
