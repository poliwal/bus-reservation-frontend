import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../shared/models/customer';
import { CustomerService } from '../shared/services/customer.service';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  constructor(private custService:CustomerService,private router:Router) { }
  cust:Customer={};
  confirmPassword:string;

  ngOnInit(): void {
  }
  onRegister()
  {
    //object
    console.log(this.cust);
    console.log(this.confirmPassword);
    this.cust.isAuthorized = true;
    this.custService.registerCustomer(this.confirmPassword,this.cust).subscribe(
      data=>{
        alert(data);
      },
      err=>{
        console.log(err);
      }
    );
    this.router.navigate(["cust-login"]);
  }

}
