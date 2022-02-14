import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer?: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    // subscribe passes the (eventual) result to the callback, which assigns the value to
    // the customers array.
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }
}