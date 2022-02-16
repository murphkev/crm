import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer/list', pathMatch: 'full' },
  { path: 'customer/list', component: CustomerListComponent },
  { path: 'customer/add', component: CustomerAddComponent },
  { path: 'customer/edit/:id', component: CustomerViewComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
