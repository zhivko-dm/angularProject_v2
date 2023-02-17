import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer } from '../models/customer';

@Component({
  selector: 'task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit{
  customers: Customer[] = [];
  searchControl: FormControl;
  searchedCustomerIndex: number;

  constructor() {
    this.searchControl = new FormControl();
    this.searchedCustomerIndex = -1;
    this.customers = this.generateCustomers();
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe(value => this.findMatchingCustomer(value));
  }


  findMatchingCustomer(value: string): void{
    this.searchedCustomerIndex = this.customers.findIndex(customer => customer.firstName === value);
  }

  private generateCustomers(): Customer[]{
    return [
      {firstName: 'Peter', lastName: 'Kent', currentBalance: 200},
      {firstName: 'Paul', lastName: 'Ronni', currentBalance: 200},
      {firstName: 'Perry', lastName: 'Tantello', currentBalance: 200},
      {firstName: 'Billy', lastName: 'Pones', currentBalance: 200},
      {firstName: 'James', lastName: 'Lafter', currentBalance: 200},
      {firstName: 'Jenna', lastName: 'Cone', currentBalance: 200},
      {firstName: 'Alan', lastName: 'Pinewood', currentBalance: 200},
      {firstName: 'Cody', lastName: 'Bently', currentBalance: 200},
      {firstName: 'Allison', lastName: 'Kirkpatrick', currentBalance: 200},
      {firstName: 'Benson', lastName: 'Phillips', currentBalance: 200}
    ];
  }

}
