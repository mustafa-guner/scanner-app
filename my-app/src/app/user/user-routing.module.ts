import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Auth for testing user's auth status
import { AuthGuard  } from '../auth/auth.guard'

//Guard for checking if user scanned barcode for visit product detail page
import { ScanGuard } from '../scan/scan.guard';

//Private Components
import {FindProductComponent} from "./find-product/find-product.component"
import {ProductDetailComponent} from "./product-detail/product-detail.component"

const routes: Routes = [
  {path:"find-product",component:FindProductComponent,canActivate: [AuthGuard]},
  {path:"product-detail",component:ProductDetailComponent,canActivate:[AuthGuard,ScanGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
