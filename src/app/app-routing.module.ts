import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer/list', pathMatch: 'full' },
  { path: 'customer/list', component: CustomerListComponent },
  { path: 'customer/add', component: CustomerAddComponent },
  { path: 'customer/edit/:id', component: CustomerEditComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
