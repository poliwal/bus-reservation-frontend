import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email:string;

  constructor(private custService:CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.custService.getCidForEmail(this.email).subscribe(
      data=>{
        localStorage.setItem('resetPassCid',data.toString());
      }
    );
    this.custService.forgotPassword(this.email).subscribe(
      data=>{
        alert(data);
      },
      err=>{
        console.log(err);
      }
    );
  }

}
