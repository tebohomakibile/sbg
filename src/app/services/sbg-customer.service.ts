import { Injectable } from '@angular/core';
import { SBGCustomer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class SbgCustomerService {

  constructor() { }

  private customerData: SBGCustomer = {
    name: '',
    surname: '',
    emailAddress:'',
    contactNumber:'',
    product:''
  };

  setCustomerData(data: SBGCustomer) {
    this.customerData =  data;
  }

  getCustomerData() {
    return this.customerData;
  }
}
