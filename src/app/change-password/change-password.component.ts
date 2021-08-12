import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePassword } from '../shared/models/change-pass';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePass:ChangePassword = new ChangePassword();

  constructor(private custService:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.changePass.cid = Number(localStorage.getItem('cid'));
    console.log(this.changePass);
    this.custService.changePassword(this.changePass.cid,this.changePass.currentPassword,this.changePass.newPassword,
      this.changePass.confirmNewPassword).subscribe(
        data=>{
          alert(data);
          this.router.navigate(["cust-dashboard"]);
        },
        err=>{
          console.log(err);
        }
      );
  }

}
