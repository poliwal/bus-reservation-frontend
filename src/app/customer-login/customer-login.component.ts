import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustLogin } from '../shared/models/cust-login';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private router:Router) { }
  cust:CustLogin={};
  err:string;
  

  ngOnInit(): void {
  }
  onLogin()
  {
    console.log(this.cust);
    if (this.cust.email == "a@a.com" && this.cust.password == "Aaaaa@111") {
      this.router.navigate(['cust-dashboard']);
      localStorage.setItem('cust','zxc');
    }
    else {
      this.err = "Invalid username or password!!";

    }
  }
}
