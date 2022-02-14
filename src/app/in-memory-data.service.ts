import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from './customer';

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
    ]
    return { customers };
  }

  // return the max id plus one, or the initial number
  genId(customers: Customer[]): number {
    return customers.length > 0 ? Math.max(...customers.map(customer => customer.id)) + 1 : 101;

  }
}
