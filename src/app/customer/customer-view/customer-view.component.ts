import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  @Input() customer?: Customer;
  editing: boolean;

  constructor(
    private customerService: CustomerService,
    private location: Location, 
    private activatedRoute: ActivatedRoute) { 
      this.editing = false;
    }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.customerService.getCustomer(id).subscribe(customer => this.customer = customer);
  }

  edit(): void {
    this.editing = true;
  }

  cancel(): void {
    this.editing = false;
    this.getCustomer();
  }

  save(): void {
    if(this.customer) {
      this.customerService.updateCustomer(this.customer).subscribe(() => this.editing = false );
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