import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  private keys: string[] = ['A', 'B', 'X', 'Y'];

  @Input()
  currentCustomers: Customer[];

  constructor() { }

  computeIdentifier(index: number): string {
    const key = this.keys[index % this.keys.length];
    const computedVal = this.compute(index + 25);
    return `${key}::${computedVal}`;
  }

  private compute(index: number): number {
    if (index === 0 || index === 1) {
      return index;
    }
    return this.compute(index - 1) + this.compute(index - 2);
  }

}
