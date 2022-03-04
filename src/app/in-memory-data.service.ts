import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from './customer/customer';
import { Order } from './order/order';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      { id: 101, name: 'Ona Sydney' },
      { id: 102, name: 'The Grounds of Alexandria' },
      { id: 103, name: 'The Counter' },
      { id: 104, name: 'Mas Tinto' },
      { id: 105, name: 'Blackbird & Co' },
      { id: 106, name: '27 Three Boulangerie' },
      { id: 107, name: 'Bespoke & Grind' },
      { id: 108, name: 'Leichhardt Espresso' },
      { id: 109, name: 'Cooh' },
      { id: 110, name: 'Cuppa Flower' }
    ];

    const products = [
      { id: 101, name: 'Cappuccino' },
      { id: 102, name: 'Long Black' },
      { id: 103, name: 'Short Black' },
      { id: 104, name: 'Flat White' },
      { id: 105, name: 'Latte' },
      { id: 106, name: 'Espresso' },
      { id: 107, name: 'Cold Press' },
      { id: 108, name: 'Mocha' },
      { id: 109, name: 'Dirty Chai' },
      { id: 110, name: 'Macchiato' }
    ];

    const orders = [
      { 
        id: 101, 
        customer: 
        { 
          id: 102, 
          name: 'The Grounds of Alexandria' 
        },
        lines: 
        [
          {
            row: 1,
            product: 
            { 
              id: 101, 
              name: 'Cappuccino' 
            },
            quantity: 1
          },
          {
            row: 2,
            product: 
            { 
              id: 102, 
              name: 'Long Black' 
            },
            quantity: 1
          },
        ]
      }
    ]
    return { customers, products, orders };
  }

  // return the max id plus one, or the initial number
  genId<T extends Customer | Product | Order >(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 101;
  }
}
