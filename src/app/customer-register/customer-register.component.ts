import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../shared/models/register';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  constructor() { }
  cust:Register={};

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
