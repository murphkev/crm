import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });
  
  constructor(
    private customerService: CustomerService,
    private location: Location) { 
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.customerService.addCustomer(this.form.value as Customer).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
