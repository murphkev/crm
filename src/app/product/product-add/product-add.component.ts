import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });
  
  constructor(
    private productService: ProductService,
    private location: Location) { 
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.productService.addProduct(this.form.value as Product).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
