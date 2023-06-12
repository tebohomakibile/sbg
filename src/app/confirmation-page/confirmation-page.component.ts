import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbgCustomerService } from '../services/sbg-customer.service';
import { SBGCustomer } from '../interfaces/customer';

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-page.component.html',
})
export class ConfirmationPageComponent implements OnInit {

  constructor(private customerService: SbgCustomerService){}

  customerData: SBGCustomer = {
    name: null,
    surname: null,
    emailAddress: null,
    contactNumber: null,
    product: null
  }

  ngOnInit(): void {
    this.customerData = this.customerService.getCustomerData();
  }
}
