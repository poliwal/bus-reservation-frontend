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
  loginData:any;

  ngOnInit(): void {
    if(localStorage.getItem('cust') == 'zxc'){
      this.router.navigate(["cust-dashboard"]);
    }
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
        
        this.loginData = data;
        console.log(data);

          localStorage.setItem('cust', 'zxc');
          localStorage.setItem('cid', this.loginData.cid.toString());
          localStorage.setItem('custName', this.loginData.fname)
          this.router.navigate(['cust-dashboard']);

      },
      err => {
        if(err.error ==  "Invalid"){
          this.err = "Invalid username or password!!";
        }
        console.log(err.error)
      }
    )
  }
}
