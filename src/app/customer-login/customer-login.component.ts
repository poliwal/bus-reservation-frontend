import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustLogin } from '../shared/models/cust-login';
import { CustomerService } from '../shared/services/customer.service';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private router: Router, private custService: CustomerService) { }
  cust: CustLogin = {};
  err: string;


  ngOnInit(): void {
  }
  // onLogin()
  // {
  //   console.log(this.cust);
  //   if (this.cust.email == "a@a.com" && this.cust.password == "Aaaaa@111") {
  //     this.router.navigate(['cust-dashboard']);
  //     localStorage.setItem('cust','zxc');
  //     localStorage.setItem('cid','1');
  //   }
  //   else {
  //     this.err = "Invalid username or password!!";

  //   }
  // }
  onLogin() {
    this.custService.doLogin(this.cust.email!, this.cust.password!).subscribe(
      data => {
        console.log(data);
        if (data != "Invalid") {
          localStorage.setItem('cust', 'zxc');
          localStorage.setItem('cid', data.cid.toString());
          localStorage.setItem('custName', data.fname)
          this.router.navigate(['cust-dashboard']);
        } else {
          this.err = "Invalid username or password!!";
        }
      },
      err => {
        console.log(err)
      }



    )

  }
}
