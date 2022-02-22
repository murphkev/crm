import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product, this.httpOptions);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productUrl, product, this.httpOptions);
  }

  deleteProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions);
  }
}
