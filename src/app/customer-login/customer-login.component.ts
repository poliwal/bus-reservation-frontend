import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustLogin } from '../shared/models/cust-login';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor() { }
  cust:CustLogin={};

  

  ngOnInit(): void {
  }
  onRegister(cformdata:NgForm)
  {
    //ngform data
    console.log(cformdata.value);
    //object
    console.log(this.cust);
  }
}
