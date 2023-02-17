import { Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'customer-modifier',
  templateUrl: './customer-modifier.component.html',
  styleUrls: ['./customer-modifier.component.scss']
})
export class CustomerModifierComponent{
  @Input()
  customerName: string;

  formControl: FormControl;

  constructor() {
    this.formControl = new FormControl(this.customerName);
  }
}
