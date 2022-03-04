import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/product/product.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { Product } from 'src/app/product/product';
import { Customer } from 'src/app/customer/customer';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { OrderLine } from '../order-line';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  @Input() order?: Order;
  editing: boolean;
  products: Product[] = [];
  customers: Customer[] = [];
  form: FormGroup;

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private customerService: CustomerService,
    private location: Location, 
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { 
      this.editing = false;
      this.form = this.formBuilder.group({ 
        customer: this.formBuilder.control(''),
        orderLines: this.formBuilder.array([])
      });
    }

  ngOnInit(): void {
    this.getOrder();
    this.getCustomers();
    this.getProducts();
  }

  set customer(control: FormControl) {
    this.customer = control;
  }

  get customer() {
    return this.form.get('customer') as FormControl;
  }

  get orderLines() {
    return this.form.get('orderLines') as FormArray;
  }

  addLine(orderLine: OrderLine) {
    this.orderLines.push(this.formBuilder.group(
      {
        row: orderLine.row,
        product: orderLine.product,
        quantity: orderLine.quantity
      }
    ));
  }

  getProducts(): void {
    // subscribe passes the (eventual) result to the callback, which assigns the value to
    // the products array.
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  getCustomers(): void {
    // subscribe passes the (eventual) result to the callback, which assigns the value to
    // the products array.
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  getOrder(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.orderService.getOrder(id).subscribe(order => {   

      this.order = order;
      this.order.lines.forEach(line  => {
        this.addLine(line);  
      });
      this.customer.patchValue(this.order.customer.id);
    });
  }

  edit(): void {
    this.editing = true;
  }

  cancel(): void {
    this.editing = false;
    this.getOrder();
  }

  save(): void {
    if(this.order) {
      this.orderService.updateOrder(this.order).subscribe(() => this.editing = false );
    }
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    if(this.order) {
      this.orderService.deleteOrder(this.order.id).subscribe();
      this.goBack();
    }
  }
}
