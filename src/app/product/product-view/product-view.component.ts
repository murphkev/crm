import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() product?: Product;
  editing: boolean;

  constructor(
    private productService: ProductService,
    private location: Location, 
    private activatedRoute: ActivatedRoute) { 
      this.editing = false;
    }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  edit(): void {
    this.editing = true;
  }

  cancel(): void {
    this.editing = false;
    this.getProduct();
  }

  save(): void {
    if(this.product) {
      this.productService.updateProduct(this.product).subscribe(() => this.editing = false );
    }
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    if(this.product) {
      this.productService.deleteProduct(this.product.id).subscribe();
      this.goBack();
    }
  }
}
