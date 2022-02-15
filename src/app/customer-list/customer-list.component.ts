import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

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
}