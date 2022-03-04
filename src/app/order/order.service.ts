import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private orderUrl = 'api/orders';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl)
  }

  getOrder(id: number): Observable<Order> {
    const url = `${this.orderUrl}/${id}`;
    return this.http.get<Order>(url);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.orderUrl, order, this.httpOptions);
  }

  updateOrder(order: Order): Observable<any> {
    return this.http.put(this.orderUrl, order, this.httpOptions);
  }

  deleteOrder(id: number): Observable<Order> {
    const url = `${this.orderUrl}/${id}`;
    return this.http.delete<Order>(url, this.httpOptions);
  }
}
