import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

//Components
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'; 
import { LoginPageComponent } from './login-page/login-page.component';
import { FindProductComponent } from './user/find-product/find-product.component';

//Angular Forms
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//Routing Modules
import { AppRoutingModule } from './app-routing.module';
import {UserRoutingModule} from "./user/user-routing.module"


//Scanner Library
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginPageComponent,
    FindProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    ZXingScannerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
