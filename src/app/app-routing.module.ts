import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductViewComponent } from './product/product-view/product-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer/list', pathMatch: 'full' },
  { path: 'customer/list', component: CustomerListComponent },
  { path: 'customer/add', component: CustomerAddComponent },
  { path: 'customer/view/:id', component: CustomerViewComponent },
  { path: 'product/list', component: ProductListComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/view/:id', component: ProductViewComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
