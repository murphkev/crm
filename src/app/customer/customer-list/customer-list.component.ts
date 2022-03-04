import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id: new FormControl('', Validators.required)
  });
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    // subscribe passes the (eventual) result to the callback, which assigns the value to
    // the customers array.
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  delete(customer: Customer): void {
    this.customers = this.customers.filter(c => c !== customer);
    this.customerService.deleteCustomer(customer.id).subscribe();
  }

  search(): void {
    const id = this.searchForm.get('id')?.value;
    const name = this.searchForm.get('name')?.value;
    this.customerService.searchCustomers(id, name).subscribe(
      customers => this.customers = customers
    );
  }
}