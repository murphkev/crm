import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    // subscribe passes the (eventual) result to the callback, which assigns the value to
    // the orders array.
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

  delete(order: Order): void {
    this.orders = this.orders.filter(c => c !== order);
    this.orderService.deleteOrder(order.id).subscribe();
  }
}
