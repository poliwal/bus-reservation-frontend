import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePassword } from '../shared/models/change-pass';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  changePass:ChangePassword = new ChangePassword();

  constructor(private custService:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.changePass.cid = Number(localStorage.getItem('resetPassCid'));
    localStorage.removeItem('resetPassCid');
    console.log(this.changePass);
    this.custService.resetPassword(this.changePass.cid,this.changePass.newPassword,
      this.changePass.confirmNewPassword).subscribe(
        data=>{
          alert(data);
          this.router.navigate(["cust-login"]);
        },
        err=>{
          console.log(err);
        }
      );
  }
}
