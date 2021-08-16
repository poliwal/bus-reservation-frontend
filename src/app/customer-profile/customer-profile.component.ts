import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../shared/models/customer';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  customer:Customer;

  constructor(private custService:CustomerService, private router:Router) { 
    this.customer = new Customer();
  }

  ngOnInit(): void {
    this.onLoading();
  }

  onLoading(){
    this.customer.cid = Number(localStorage.getItem("cid"));
    // console.log(this.customer)
    this.custService.getCustomer(this.customer.cid).subscribe(
      data=>{
        this.custService.customer = data as Customer;
        this.customer = this.custService.customer;
        this.customer.dob = this.customer.dob?.slice(0,10);
        console.log(this.custService.customer)
      },
      err => {
        console.log(err);
      }
    );
    // this.customer = this.custService.customer;
    // console.log(this.customer);
  }

  // assign(){
  //   console.log(this.customer);
  // }

  updateProfile(){
    this.custService.updateCustomer(this.customer.cid!,this.customer).subscribe(
      data=>{
        alert(data);
      },
      err=>{
        console.log(err);
      }
    );
  }

  rating:number;
  feedback()
  {
    this.customer.feedback=this.rating;
    this.custService.updateCustomer(this.customer.cid!,this.customer).subscribe(
      data=>{
        alert("Feedback submitted");
      },
      err=>{
        console.log(err);
      }
    );
    this.rating=null!;
  }
}
