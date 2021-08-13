import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  cid:number;
  customer:Customer;
  walletAmount = 28;
  constructor(private custService:CustomerService) { 
    this.customer = new Customer();
  }

  ngOnInit(): void {
    this.cid = Number(localStorage.getItem("cid"))
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.custService.getCustomer(this.cid).subscribe(
      data=>{
        console.log(data);
        this.customer = data as Customer;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
