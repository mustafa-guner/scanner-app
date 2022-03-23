import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

//Componenets for auth based
import { FindProductComponent } from './find-product/find-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    FindProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    
  ],
  
})
export class UserModule { }
