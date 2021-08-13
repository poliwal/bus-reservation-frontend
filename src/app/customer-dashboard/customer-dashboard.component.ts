import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  custSession:string;
  custName:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.custSession= localStorage.getItem('cust')!;
    this.custName = localStorage.getItem('custName')!;
    // if(this.custSession!='zxc'){
    //   this.router.navigate(["cust-login"]);
    // }
  }

  goToLogin(){
    this.router.navigate(["cust-login"]);
  }

  logOff(){
    localStorage.removeItem("cust");
    localStorage.removeItem("cid");
    localStorage.removeItem("custName");
    this.router.navigate(["home"]);
  }

}
