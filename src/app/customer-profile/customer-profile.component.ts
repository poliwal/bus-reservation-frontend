import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  customer:Customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  updateProfile(){
    console.log(this.customer)
  }

}
