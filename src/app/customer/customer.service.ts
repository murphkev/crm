import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private customerUrl = 'api/customers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl)
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.get<Customer>(url);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl, customer, this.httpOptions);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put(this.customerUrl, customer, this.httpOptions);
  }

  deleteCustomer(id: number): Observable<Customer> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.delete<Customer>(url, this.httpOptions);
  }

  searchCustomers(id: string, name: string): Observable<Customer[]> {
    if(!id.trim() && !name.trim()) {
      return this.getCustomers();
    }
    else if(!id.trim()) {
      console.log(`${this.customerUrl}/?name=${name}`);
      return this.http.get<Customer[]>(`${this.customerUrl}/?name=${name}`);
      
    }
    else if(!name.trim()) {
      console.log(`${this.customerUrl}/?id=${id}`);
      return this.http.get<Customer[]>(`${this.customerUrl}/?id=${id}`);
    }
    else {
      console.log(`${this.customerUrl}/?name=${name}&id=${id}`);
      return this.http.get<Customer[]>(`${this.customerUrl}/?name=${name}&id=${id}`);
    }
  }
}