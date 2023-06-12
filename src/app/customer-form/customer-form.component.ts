import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SBGCustomer } from '../interfaces/customer';
import { SbgCustomerService } from '../services/sbg-customer.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationMessageComponent } from "../validation-message/validation-message.component";
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
    selector: 'app-customer-form',
    standalone: true,
    templateUrl: './customer-form.component.html',
    imports: [CommonModule, FormsModule, ValidationMessageComponent, CustomInputComponent]
})
export class CustomerFormComponent {

  constructor(private customerService: SbgCustomerService, private router: Router){}

  customerInfo: SBGCustomer = {
    name: null,
    surname: null,
    emailAddress: null,
    contactNumber: null,
    product: null
  };

  productOptions = [
    "Life Insurance",
    "Household Insurance",
    "Vehicle Insurance"
  ]

  submitForm () {
    this.customerService.setCustomerData(this.customerInfo);
    this.router.navigate(['confirmation']);
  }

}
