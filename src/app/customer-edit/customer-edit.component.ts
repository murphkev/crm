import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  @Input() customer?: Customer;

  constructor(
    private customerService: CustomerService,
    private location: Location, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.customerService.getCustomer(id).subscribe(customer => this.customer = customer);
  }

  save(): void {
    if(this.customer) {
      this.customerService.updateCustomer(this.customer).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    if(this.customer) {
      this.customerService.deleteCustomer(this.customer.id).subscribe();
      this.goBack();
    }
  }
}